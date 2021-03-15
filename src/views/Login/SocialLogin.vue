<template>
  <div class="hello">
    <p>isInit: {{ isInit }}</p>
    <p v-if="user && isSignedIn">{{ user.getBasicProfile().getName() }}</p>
    <button :disabled="!isInit || isSignedIn" @click="signIn">SignIn</button>
    <button :disabled="!isInit || !isSignedIn" @click="signOut">SignOut</button>
    <button :disabled="!isInit || !isSignedIn" @click="disconnect">
      Disconnect
    </button>
  </div>
</template>

<script>
// import GoogleButton from "../../components/GoogleButton";
// import FacebookButton from "../../components/FacebookButton";

export default {
  directives: {},
  name: "SocialLogin",
  components: {
    // GoogleButton,
    // FacebookButton,
  },
  data() {
    return {
      isInit: false,
      isSignedIn: false,
      user: null,
    };
  },
  created() {
    const that = this;
    const checkGALoad = setInterval(function () {
      that.isInit = that.$google.isInit;
      if (that.isInit) {
        that.isSignedIn = that.$google.api.auth2
          .getAuthInstance()
          .isSignedIn.get();
        that.$google.api.auth2
          .getAuthInstance()
          .isSignedIn.listen(that.signInListener);
        that.$google.api.auth2
          .getAuthInstance()
          .currentUser.listen(that.userListener);
        clearInterval(checkGALoad);
      }
    }, 200);
  },
  methods: {
    async signIn() {
      try {
        return await this.$google.api.auth2.getAuthInstance().signIn();
      } catch (e) {
        console.log(e);
      }
    },
    async signOut() {
      try {
        return await this.$google.api.auth2.getAuthInstance().signOut();
      } catch (e) {
        console.log(e);
      }
    },
    async disconnect() {
      return await this.$google.api.auth2.getAuthInstance().disconnect();
    },
    signInListener(status) {
      this.isSignedIn = status;
    },
    userListener(user) {
      this.user = user;
    },
  },
};
</script>

<style lang="scss" scope>
.title {
  margin-bottom: 3rem;
  text-decoration: underline;
  font: normal normal medium 40px/74px Poppins;
  letter-spacing: 0px;
  color: #4d4d4d;
}

.fild-login {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 5px;
}
</style>