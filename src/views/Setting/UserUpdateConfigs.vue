<template>
  <ValidationObserver ref="accountInfo">
    <b-form
      slot-scope="{ validate }"
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
    </b-form>
  </ValidationObserver>
</template>

<script>
import User from "../../models/User";

export default {
  name: "UserUpdateConfigs",
  props: {
    disableForm: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      user: new User(),
    };
  },
  methods: {},
};
</script>