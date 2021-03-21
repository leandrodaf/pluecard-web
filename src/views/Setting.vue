<template>
  <auth-page>
    <template slot:default>
      <b-container>
        <b-row>
          <b-col lg="6" class="text-center">
            <div class="title text-center"><h2>Conta</h2></div>
            <div class="form">
              <user-update-form :disableForm="!!hash" />
              <user-update-password-form :disableForm="!!hash" />
            </div>
          </b-col>
          <b-col lg="4">
            <div class="title text-center"><h2>Config</h2></div>
            <div class="form">
              <user-update-configs :disableForm="!!hash" />
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
import UserUpdateForm from "./Setting/UserUpdateForm";
import UserUpdatePasswordForm from "./Setting/UserUpdatePasswordForm";
import UserUpdateConfigs from "./Setting/UserUpdateConfigs";

export default {
  name: "Setting",
  components: {
    AuthPage,
    UserUpdateForm,
    UserUpdatePasswordForm,
    UserUpdateConfigs,
  },
  data() {
    return {
      passwordfake: "fake-password",
      hash: null,
    };
  },
  created() {
    this.hash = this.$route.query.hash;
  },
};
</script>
