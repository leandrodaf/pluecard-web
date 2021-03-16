<template>
  <div>
    <v-facebook-login
      v-model="model"
      @sdk-init="handleSdkInit"
      appId="389645282465369"
    />
    <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
    </button>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component";

export default {
  name: "FacebookButton",
  data: () => ({
    FB: {},
    model: {},
    scope: {},
  }),
  methods: {
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;

      console.log(">>>", FB, scope);
    },
  },
  components: {
    VFacebookLogin,
  },
};
</script>


<style lang="scss" scope>
.facebook-button {
  height: 40px;
  border-width: 0;
  background: #3a5a97;
  color: #ffffff;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;

  &:focus,
  &:hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #3a5ea0;
    box-shadow: none;
    transition-duration: 10ms;
  }
}

.facebook-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.facebook-button__icon--plus {
  width: 27px;
}

.facebook-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 18px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}
</style>