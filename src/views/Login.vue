<template>
  <div class="plue-app flex-row align-items-center">
    <b-container>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group">
            <div
              class="card text-center py-5 d-md-down-none bg-clean text-white"
            >
              <div class="card-body">
                <div class="card-body">
                  <b-container style="padding-top: 80px">
                    <img src="../assets/big-white-logo.png" height="180" />
                  </b-container>
                </div>
              </div>
            </div>
            <div class="card card-login p-4">
              <div class="card-body">
                <form-login> </form-login>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        Não tem uma conta?<br />
        <a href="#criarConta">Clique aqui faça a sua</a>
      </div>
    </b-container>
  </div>
</template>

<script>
import FormLogin from "./Login/FormLogin";

export default {
  components: {
    FormLogin,
  },

  name: "Login",
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {},
};
</script>

<style lang="scss" scope>
.plue-app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  min-height: 100vh;
  background-color: $primary;
}

.justify-content-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.card-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

.card-login {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0px;
  border-radius: 0.25rem;
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.bg-clean {
  border: 0px;
  background-color: #ffffff00;
}
</style>
