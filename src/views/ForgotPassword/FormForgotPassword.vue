<template>
  <div>
    <div v-if="!hash">
      <ValidationObserver ref="ForgotPassword">
        <b-form
          slot-scope="{ validate, invalid }"
          @submit.prevent="validate().then(handleForgot)"
        >
          <b-container class="text-center title"
            ><h3>Recuperar senha</h3></b-container
          >

          <ValidationProvider vid="email" rules="required|email" name="Email">
            <b-form-group slot-scope="{ valid, errors }">
              <b-form-input
                class="fild-login"
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

          <b-button block type="submit" variant="primary" :disabled="invalid"
            >Solicitar</b-button
          >

          <b-alert
            v-model="confirmationReceivehash"
            class="position-fixed fixed-top m-0 rounded-0 text-center"
            style="z-index: 2000"
            variant="success"
            dismissible
          >
            Enviamos um código para o seu email, pode confirmar?
          </b-alert>
        </b-form>
      </ValidationObserver>
    </div>
    <div v-if="hash">
      <ValidationObserver ref="ConfirmationForgotPassword">
        <b-form
          slot-scope="{ validate, invalid }"
          @submit.prevent="validate().then(handleConfirmForgot)"
        >
          <b-container class="text-center title"
            ><h3>Recuperar senha</h3></b-container
          >

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

          <b-button block type="submit" variant="primary" :disabled="invalid"
            >Solicitar</b-button
          >

          <b-alert
            v-model="confirmationReset"
            class="position-fixed fixed-top m-0 rounded-0 text-center"
            style="z-index: 2000"
            variant="success"
            dismissible
          >
            Enviamos um código para o seu email, pode confirmar?
          </b-alert>
        </b-form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import User from "../../models/User";

export default {
  name: "FormForgotPassword",
  components: {},
  data: () => ({
    hash: false,
    confirmationReset: false,
    confirmationReceivehash: false,
    user: new User(),
  }),
  mounted() {
    this.hash = this.$route.query.hash;
  },
  methods: {
    handleConfirmForgot() {
      this.$store
        .dispatch("confirmForgotPassword", { user: this.user, hash: this.hash })
        .then(() => {
          this.$router.push({name: 'Login'});
          return this.$store.dispatch("pushNotification", {
            title: "Alteração de senha",
            body: "Alteração realizada com sucesso, refaça o login",
            varian: "success",
          });
        })
        .catch((error) => {
       if (error.data.status === 404) {
           this.hash = false;
            this.$store.dispatch("pushNotification", {
              title: "Hash inválido",
              body: "Gere um novo código de recuperação de senha",
              varian: "warning",
            });
            return this.$router.push({name: 'ForgotPassword'});
          }

          error.hasErrorBag()
            ? this.$refs.ForgotPassword.setErrors(error.data.errors)
            : undefined;
        });
    },
    handleForgot() {
      this.$store
        .dispatch("forgotPassword", this.user)
        .then(() => {
          this.confirmationReset = true;
        })
        .catch((error) => {
             error.hasErrorBag()
            ? this.$refs.ForgotPassword.setErrors(error.data.errors)
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

.fild-login {
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 5px;
}
</style>