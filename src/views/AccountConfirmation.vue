<template>
  <div></div>
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
          if (error.data.status === 404 || error.data.status === 400) {
            this.$store.dispatch("pushNotification", {
              title: "Hash de confirmação inválido",
              body:
                "O seu código de confirmação é invalido, crie um novo através do email que lhe enviamos.",
              varian: "danger",
            });
          }

          this.$router.push({
            name: "Login",
            params: { confirmationError: "test title" },
          });
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
