<template>
  <b-container class="plue-container-global">
    <b-row class="text-center">
      <b-col sm="6">
        <b-container style="padding-top: 80px">
          <img src="../assets/big-logo.png" height="150px" width="150px" />
        </b-container>
      </b-col>
      <b-col sm="4">
        <b-container class="plue-bg-form">
          <b-form @submit.prevent="handleLogin">
            <h1
              style="
                text-align: center;
                font: normal normal medium 40px/74px Poppins;
                letter-spacing: 0px;
                color: #4d4d4d;
                opacity: 1;
              "
            >
              Entrar
            </h1>
            <b-form-group id="email-input">
              <b-form-input
                class="plue-input-form"
                id="email"
                type="email"
                placeholder="E-mail"
                v-model="user.email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="pasword-input">
              <b-form-input
                class="plue-input-form"
                id="pasword"
                type="password"
                placeholder="Senha"
                v-model="user.password"
                required
              ></b-form-input>
              <b-form-group id="forgotPassword" class="forgotPassword">
                <a href="#">Esqueci minha senha</a>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
                class="pluebutton-btn-form"
                >Entrar</b-button
              >
            </b-form-group>

            <button v-google-signin-button="clientId" class="google-signin" />
          </b-form>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GoogleSignInButton from "vue-google-signin-button-directive";
import Config from "../../configs/config.json";
import User from "../models/User";
const env = process.env.NODE_ENV;

export default {
  directives: {
    GoogleSignInButton,
  },
  name: "Login",
  data() {
    return {
      clientId: Config[env].services.google.clientId,
      user: new User(null, "", ""),
    };
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
  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log(">>>", idToken);
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },

    handleLogin() {
      if (this.user.email && this.user.password) {
        this.$store
          .dispatch("login", this.user)
          .then(() => this.$router.push({ name: "Home" }));
      }
    },
  },
};
</script>

<style>
.google-signin {
  background-image: url("../assets/btn_google_signin_dark_normal_web.png");
  display: inline-block;
  width: 191px;
  height: 46px;
  border: 0px;
}
.google-signin:hover {
  background-image: url("../assets/btn_google_signin_dark_focus_web.png");
  cursor: pointer;
}
.google-signin:active {
  background-image: url("../assets/btn_google_signin_dark_pressed_web.png");
}
.google-signin:disabled {
  background-image: url("../assets/btn_google_signin_dark_disabled_web.png");
}

.forgotPassword {
  margin-top: 20px;
  margin-bottom: 20px;
}
.pluebutton-btn-form {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
body {
  background: #00aee9 0% 0% no-repeat padding-box;
  opacity: 1;
}
.plue-input-form {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: 0px;
}
.plue-container-global {
  margin-top: 96px;
}
.plue-bg-form {
  padding-top: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  opacity: 1;
}
</style>
