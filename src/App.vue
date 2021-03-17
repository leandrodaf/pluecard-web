<template>
  <div id="app">
    <vue-topprogress ref="topProgress" color="#FFFFFF"></vue-topprogress>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    loading() {
      return this.$store.getters.getloading;
    },
    throwError() {
      return this.$store.getters.getError;
    },
  },
  watch: {
    loading() {
      if (this.$store.getters.getloading !== undefined) {
        this.makeLoading(this.$store.getters.getloading);
      }
    },
    throwError() {
      if (this.$store.getters.getError !== undefined) {
        this.makeToast(this.$store.getters.getError);
      }
    },
  },
  methods: {
    makeLoading(type) {
      if (type === "start") {
        this.$refs.topProgress.start();
      }
      if (type === "done") {
        this.$refs.topProgress.done();
      }

      if (type === "fail") {
        this.$refs.topProgress.fail();
      }
    },
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
