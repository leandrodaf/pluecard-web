<template>
  <b-container class="text-center">
    <google-button
      :disabled="isSignedIn || !gauthReady"
      @click.native="signIn"
    />
    <facebook-button />
  </b-container>
</template>

<script>
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";
import { mapGetters, mapActions } from "vuex";
import GoogleAuth from "../../models/GoogleAuth";

export default {
  directives: {},
  name: "SocialLogin",
  components: {
    GoogleButton,
    FacebookButton,
  },
  computed: {
    ...mapGetters("gauth", {
      gauthReady: "isReady",
      isSignedIn: "isSignedIn",
    }),
  },
  watch: {
    isSignedIn() {
      const GClient = this.$google.api.client.getToken();

      const googleAuth = new GoogleAuth(
        GClient.token_type,
        GClient.access_token,
        GClient.scope,
        GClient.login_hint,
        GClient.expires_in,
        GClient.id_token,
        GClient.session_state,
        GClient.first_issued_at,
        GClient.expires_at,
        GClient.idpId
      );

      this.$store
        .dispatch("socialLogin", { driver: "google", dataAuth: googleAuth })
        .then(() => this.$router.push({ name: "Home" }))
        .catch((error) => {
          error.hasErrorBag()
            ? this.$refs.AutuhUser.setErrors(error.data.errors)
            : undefined;
        });
    },
  },
  mounted() {
    this.$store.dispatch("gauth/init");
  },
  methods: {
    ...mapActions("gauth", {
      signIn: "signIn",
    }),
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