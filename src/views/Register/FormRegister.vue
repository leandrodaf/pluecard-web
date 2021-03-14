<template>
  <ValidationObserver ref="RegisterUser">
    <b-form
      slot-scope="{ validate, invalid }"
      @submit.prevent="validate().then(handleRegister)"
    >
      <b-container class="text-center title"
        ><h2>Crie sua conta</h2></b-container
      >

      <ValidationProvider vid="name" rules="required" name="Nome Completo">
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-input
            class="fild-register"
            type="text"
            v-model="user.name"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Nome completo"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

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

      <ValidationProvider
        vid="password_confirmation"
        rules="required|confirmed:password"
        name="Confirme a senha"
      >
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-input
            class="fild-register"
            type="password"
            v-model="user.password_confirmation"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Confirme a senha"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        vid="accept_terms"
        :rules="{ required: { allowFalse: false } }"
        name="Aceitar os termos"
      >
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-checkbox
            class="fild-register"
            type="password"
            v-model="user.accept_terms"
            :state="errors[0] ? false : valid ? true : null"
          >
            Li e concordo com os
            <a href="#" v-b-modal.modal-scrollable>Termos de uso</a>
          </b-form-checkbox>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button block type="submit" variant="primary" :disabled="invalid">
        Criar conta
      </b-button>

      <b-container>
        <separate>Ou</separate>

        <b-form-group class="text-center">
          <google-button>Entre com Google</google-button>
          <facebook-button>Entre com Facebook</facebook-button>
        </b-form-group>
      </b-container>

      <b-alert
        v-model="confirmationAcount"
        class="position-fixed fixed-top m-0 rounded-0 text-center"
        style="z-index: 2000"
        variant="success"
        dismissible
      >
        Estamos quase la, faça a confirmação da sua conta em seue Email.
      </b-alert>

      <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </b-modal>
    </b-form>
  </ValidationObserver>
</template>

<script>
import User from "../../models/User";
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";

import Separate from "../../components/Separate";
export default {
  name: "FormRegister",
  components: {
    GoogleButton,
    FacebookButton,
    Separate,
  },
  data: () => ({
    user: new User(),
    confirmationAcount: false,
  }),
  mounted: () => {},
  methods: {
    handleRegister() {
      this.$store
        .dispatch("register", this.user)
        .then(() => {
          this.confirmationAcount;
        })
        .catch((error) => {
          error.hasErrorBag()
            ? this.$refs.RegisterUser.setErrors(error.data.errors)
            : undefined;
        });
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

.fild-register {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 5px;
}
</style>