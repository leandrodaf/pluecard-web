<template>
  <ValidationObserver ref="AutuhUser">
    <b-form
      slot-scope="{ validate, invalid }"
      @submit.prevent="validate().then(handleRegister)"
    >
      <b-container class="text-center title"><h2>Entrar</h2></b-container>

      <ValidationProvider vid="email" rules="required|email" name="Email">
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-input
            class="fild-register"
            type="text"
            v-model="user.email"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="E-mail"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider vid="password" rules="required" name="Senha">
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-input
            class="fild-register"
            type="password"
            v-model="user.password"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Senha"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-container class="text-center">
        <p>
          <a href="#">Esqueci minha senha</a>
        </p>
      </b-container>

      <b-button block type="submit" variant="primary" :disabled="invalid"
        >Entrar</b-button
      >

      <b-container>
        <separate>Ou</separate>

        <b-form-group class="text-center">
          <google-button
            v-google-signin-button="clientId"
            class="btn-social-login"
            >Entre com Google</google-button
          >
          <facebook-button class="btn-social-login"
            >Entre com Facebook</facebook-button
          >
        </b-form-group>
      </b-container>
    </b-form>
  </ValidationObserver>
</template>

<script>
import Separate from "../../components/Separate";
export default {
  directives: {
    GoogleSignInButton,
  },
  name: "FormRegister",
  components: {
    Separate,
  },
  data: () => ({}),
  methods: {
    handleRegister() {},
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

.fild-register {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 5px;
}

</style>