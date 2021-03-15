<template>
  <auth-page>
    <template slot:default>
      <b-container>
        <b-row>
          <b-col lg="6" class="text-center">
            <div class="title text-center"><h2>Conta</h2></div>
            <div class="form">
              <ValidationObserver ref="accountInfo">
                <b-form
                  slot-scope="{ validate, invalid }"
                  @submit.prevent="validate().then(handleLogin)"
                >
                  <ValidationProvider
                    vid="Nome de usuário"
                    rules="required"
                    name="username"
                  >
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      label="Nome de usuário:"
                      label-for="username-field"
                    >
                      <b-form-input
                        :disabled="isResetPassword"
                        id="username-field"
                        class="input-field-setting"
                        type="text"
                        v-model="user.username"
                        :state="errors[0] ? false : valid ? true : null"
                        placeholder="Nome completo"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </ValidationProvider>

                  <ValidationProvider
                    vid="email"
                    rules="required|email"
                    name="email"
                  >
                    <b-form-group
                      slot-scope="{ errors }"
                      label="E-mail:"
                      label-for="email-field"
                      cl
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

                  <b-button
                    block
                    type="submit"
                    variant="primary"
                    :disabled="invalid"
                    >Solicitar</b-button
                  >
                </b-form>
              </ValidationObserver>
            </div>
          </b-col>
          <b-col lg="4" class="form-bg-login">
            <div class="title text-center"><h2>Config</h2></div>
            <div class="form">
              <ValidationObserver ref="accountInfo">
                <b-form
                  slot-scope="{ validate }"
                  @submit.prevent="validate().then(handleLogin)"
                >
                  <ValidationProvider
                    vid="accept_terms"
                    :rules="{ required: { allowFalse: false } }"
                    name="Aceitar os termos"
                  >
                    <b-form-group slot-scope="{ valid, errors }">
                      <b-form-checkbox
                        class="fild-register"
                        type="password"
                        v-model="user.newsletter"
                        :state="errors[0] ? false : valid ? true : null"
                      >
                        Receber notificações e novidades por e-mail
                      </b-form-checkbox>
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
                        v-model="user.discount_coupons"
                        :state="errors[0] ? false : valid ? true : null"
                      >
                        Receber cupons de descontos por e-mail
                      </b-form-checkbox>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </ValidationProvider>
                </b-form>
              </ValidationObserver>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </auth-page>
</template>

<style lang="scss" scope>
.title {
  margin-bottom: 3rem;
  text-decoration: underline;
  font: normal normal medium 40px/74px Poppins;
  letter-spacing: 0px;
  color: #4d4d4d;
}

.form-group label {
  text-align: left;
  letter-spacing: 0px;
  color: #a5a5a5;
  opacity: 1;
}

.input-field-setting {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 5px;
}
</style>

<script>
import AuthPage from "../template/AuthPage";
import User from "../models/User";

export default {
  name: "Setting",
  components: { AuthPage },
  data() {
    return {
      isResetPassword: false,
      user: new User(),
    };
  },
};
</script>
