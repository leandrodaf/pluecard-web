<template>
  <ValidationObserver ref="accountInfo">
    <b-form
      slot-scope="{ validate, invalid }"
      @submit.prevent="validate().then(updateUserPersonal)"
    >
      <ValidationProvider
        vid="username"
        rules="required"
        name="Nome de usuário"
      >
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Nome de usuário:"
          label-for="username-field"
        >
          <b-form-input
            :disabled="disableForm"
            id="username-field"
            class="input-field-setting"
            type="text"
            v-model="user.name"
            :state="errors[0] ? false : valid ? null : null"
            placeholder="Nome completo"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider vid="email" name="email">
        <b-form-group
          slot-scope="{ errors }"
          label="E-mail:"
          label-for="email-field"
        >
          <b-form-input
            disabled
            id="email-field"
            class="input-field-setting"
            type="text"
            v-model="user.email"
            placeholder="E-mail"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider vid="fakePassword" v-if="!disableForm">
        <b-form-group
          slot-scope="{ errors }"
          label="Senha:"
          label-for="password-field"
        >
          <b-form-input
            disabled
            id="password-field"
            class="input-field-setting"
            type="password"
            value="FAKE_VALUE"
          >
          </b-form-input>
          <a @click="requestPasswordRest" href="#passwordReset">Solicitar a troca da senha</a>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button
        block
        type="submit"
        variant="primary"
        :disabled="invalid"
        v-if="!disableForm"
      >
        Solicitar alterações
      </b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
import User from "../../models/User";

export default {
  name: "UserUpdateForm",
  props: {
    disableForm: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.user = this.$store.getters.getUserContext;
  },
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    requestPasswordRest() {
      this.$store
        .dispatch("requestPasswordRest", this.user)
        .then(() => {
          this.$store.dispatch("loadUserContext");
          this.$store.dispatch("pushNotification", {
            title: "Atualização de senha",
            body: "Confirme o token em seu email para resetar a senha",
            varian: "success",
          });
        })
        .catch((error) =>
          error.hasErrorBag()
            ? this.$refs.AutuhUser.setErrors(error.data.errors)
            : undefined
        );
    },
    updateUserPersonal() {
      this.$store
        .dispatch("updateUser", this.user)
        .then(() => {
          this.$store.dispatch("loadUserContext");

          this.$store.dispatch("pushNotification", {
            title: "Atualização de informações de usuário",
            body: "Atualizado com sucesso",
            varian: "success",
          });
        })
        .catch((error) =>
          error.hasErrorBag()
            ? this.$refs.AutuhUser.setErrors(error.data.errors)
            : undefined
        );
    },
  },
};
</script>