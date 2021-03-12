<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    throwError() {
      return this.$store.getters.getError;
    },
  },
  watch: {
    throwError() {
      if (this.$store.getters.getError !== undefined) {
        this.makeToast(this.$store.getters.getError);
      }
    },
  },
  methods: {
    makeToast(
      variant = {
        title: "Shii :/",
        body: "Estamos resolvendo esse problema ;)",
      }
    ) {
      let body = `${variant.body}`;

      if (variant.result !== undefined) {
        body = body + `-  ${variant.result}`;
      }

      this.$bvToast.toast(body, {
        title: variant.title,
        variant: variant.varian,
        solid: true,
      });
    },
  },
};
</script>
