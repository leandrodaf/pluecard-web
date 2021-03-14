<template>
  <start-page>
    <template slot:default>
      <b-container class="bg-page" fluid>
        <b-container>
          <b-row>
            <b-col
              lg="6"
              class="d-none d-sm-block text-center"
              align-self="center"
            >
              <img src="../assets/big-white-logo.png" height="180" />
            </b-col>
            <b-col lg="4" class="form-bg-register">
              <register-form />
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </template>

    <template slot="footer">
      <div class="footer-login text-center">
        Já tem uma conta?<br />
        <router-link to="Login" class="rounded"
          >Clique aqui para entrar!</router-link
        >
      </div>
    </template>
  </start-page>
</template>

<script>
import StartPage from "../template/StartPage";
import RegisterForm from "./Register/FormRegister";

export default {
  components: {
    StartPage,
    RegisterForm,
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
.form-bg-register {
  padding: 2rem 3rem 1rem 3rem;
  background: $white 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
}

.bg-page {
  padding-top: 2.5rem;
  background-color: $primary;
  border-radius: 0 0 50% 50%;
}

.footer-login {
  line-height: 2rem;
  color: #707070;
  padding-bottom: 2rem;
}
.footer-login a {
  color: #707070;
  border: 1px solid #707070;
  padding: 0.25rem;
}
.footer-login a:hover {
  color: #6d6d6d;
  text-decoration: none;
}
</style>
