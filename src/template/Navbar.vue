<template>
  <b-navbar
    v-show="authentication"
    toggleable="lg"
    type="dark"
    variant="primary"
    style="padding: 20px"
  >
    <b-container>
      <b-navbar-brand to="#">
        <img src="../assets/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cards">
            <b-icon-card-heading class="icon-margin-nav" />
            Meus Cartões
          </b-nav-item>
          <b-nav-item to="/credits">
            <b-icon-cart3 class="icon-margin-nav" />
            Créditos
          </b-nav-item>
          <b-nav-item to="/settings">
            <b-icon-gear class="icon-margin-nav" />
            Configurações
          </b-nav-item>
          <b-nav-item to="/questions">
            <b-icon-question class="icon-margin-nav" />
            Dúvidas
          </b-nav-item>
          <b-nav-item @click="logOut">
            <b-icon-download class="icon-margin-nav" rotate="270" />
            Sair
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style lang="scss" scope>
.icon-margin-nav {
  margin-right: 3px;
}

.navbar-dark .navbar-nav {
  padding-top: 10px;
}

.navbar-dark .navbar-nav .nav-link {
  color: $white;
  padding-left: 10px;
}

.navbar-dark .navbar-nav .nav-link:hover {
  background-color: $white;
  color: $blue;
  border-radius: 5px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      authentication: false,
    };
  },
  methods: {
    ...mapActions("gauth", {
      signIn: "signIn",
      signOut: "signOut",
    }),
    logOut() {
      this.$store
        .dispatch("logOut")
        .then(() => this.$router.push({ name: "Login" }));

      if (this.gauthReady && this.isSignedIn) {
        this.signOut();
      }
    },
  },
  computed: {
    ...mapGetters("gauth", {
      gauthReady: "isReady",
      isSignedIn: "isSignedIn",
    }),
    loggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  watch: {
    loggedIn(newCount) {
      this.authentication = newCount;
    },
  },
  created() {
    this.authentication = this.loggedIn;
  },
};
</script>