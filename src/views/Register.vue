<template>
  <b-container class="plue-container-global">
    <b-row class="text-center">
      <b-col sm="6">
        <b-container style="padding-top: 80px">
          <img src="../assets/big-logo.png" height="150px" width="150px" />
          <p>
            <span
              style="
                font-size: x-large;
                text-align: center;
                font-family: normal normal medium 26px/36px Poppins;
                letter-spacing: 0px;
                color: #ffffff;
              "
              >Faça uma conta e</span
            ><br />
            <span style="font-size: x-large; font-weight: bold; color: #ffffff"
              >crie o seu cartão digital</span
            >
          </p>
        </b-container>
      </b-col>
      <b-col sm="4">
        <b-container class="plue-bg-form">
          <b-form @submit.prevent="handleRegister">
            <h1
              style="
                text-align: center;
                font: normal normal medium 40px/74px Poppins;
                letter-spacing: 0px;
                color: #4d4d4d;
                opacity: 1;
              "
            >
              Crie sua conta
            </h1>

            <b-form-group id="username-input">
              <b-form-input
                class="plue-input-form"
                id="username"
                type="text"
                placeholder="Nome de usuário"
                v-model="user.name"
                required
              ></b-form-input>
            </b-form-group>

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
            </b-form-group>

            <b-form-group id="pasword-input-confirmation">
              <b-form-input
                v-model="paswordConfirmation"
                class="plue-input-form"
                id="paswordConfirmation"
                type="password"
                placeholder="Confirmação de senha"
                required
              ></b-form-input>
            </b-form-group>

            <b-input-group>
              <b-form-checkbox
                v-model="confirmation"
                name="check-button"
                switch
                style="font-size: 15px"
              >
                Li e concordo com os <a href="#termos">termos de uso</a>
              </b-form-checkbox>
            </b-input-group>

            <b-button
              type="submit"
              variant="primary"
              class="pluebutton-btn-form"
            >
              Criar conta
            </b-button>
          </b-form>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import User from "../models/User";

export default {
  name: "Login",
  data() {
    return {
      accountCreate: false,
      confirmation: false,
      paswordConfirmation: undefined,
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
    handleRegister() {
      if (
        this.user.password === this.paswordConfirmation &&
        this.confirmation
      ) {
        this.$store.dispatch("register", this.user).then(() => {
          this.accountCreate = false;
        });
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
