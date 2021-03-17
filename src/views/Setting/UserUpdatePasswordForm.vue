<template>
  <ValidationObserver ref="accountInfo">

    <b-form
      slot-scope="{ validate, invalid }"
      @submit.prevent="validate().then(updateUserPasswordPersonal)"
    >
      <ValidationProvider
        v-if="disableForm"
        vid="newPassword"
        :rules="disableForm ? 'required' : null"
        name="Nova senha"
      >
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Nova senha:"
          label-for="newPassword-field"
        >
          <b-form-input
            id="newPassword-field"
            class="input-field-setting"
            type="password"
            v-model="user.password"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Nova senha"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        v-if="disableForm"
        vid="newPasswordConfirmation"
        :rules="disableForm ? 'required|confirmed:newPassword' : null"
        name="Confirmação da senha"
      >
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Confirmação da senha:"
          label-for="newPasswordConfirmation-field"
        >
          <b-form-input
            id="newPasswordConfirmation-field"
            class="input-field-setting"
            type="password"
            v-model="user.password_confirmation"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Confirmação da senha"
          >
          </b-form-input>
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
        v-if="disableForm"
      >
        Alterar senha
      </b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
import User from "../../models/User";

export default {
  name: "UserUpdatePasswordForm",
  props: {
    disableForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: new User(),
      hash: null,
    };
  },
  created() {
    this.user = this.$store.getters.getUserContext;
    this.hash = this.$route.query.hash;
  },
  methods: {
    updateUserPasswordPersonal() {
      // this.$refs.topProgress.start();
      console.log(">>>>fdfdfd>", this.user);
      // this.$refs.topProgress.done();
    },
  },
};
</script>