<template>
  <div>
    <header>
      <nav-bar />
    </header>
    <div class="main">
      <b-container>
        <slot />
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "AuthPage",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss" scope>
.main {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
}
</style>