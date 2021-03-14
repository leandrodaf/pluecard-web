<template>
  <div>asas</div>
</template>

<script>
export default {
  name: "AccountConfirmation",

  computed: {
    loggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    confirmationAccount(hash) {
      this.$store
        .dispatch("accountConfirmation", hash)
        .then(() => this.$router.push({ name: "Home" }))
        .catch((error) => {
          error.hasErrorBag()
            ? this.$refs.AutuhUser.setErrors(error.data.errors)
            : undefined;

          this.$router.push({ name: "Login" });
        });
    },
  },
  created() {
    const hash = this.$route.query.hash;

    if (!hash) {
      this.$router.push({ name: "Login" });
    } else {
      this.confirmationAccount(hash);
    }

    if (this.loggedIn) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
