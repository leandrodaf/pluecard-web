<template>
  <auth-page>
    <template slot:default> teste </template>
  </auth-page>
</template>

<script>
import AuthPage from "../template/AuthPage";

export default {
  name: "Home",
  components: { AuthPage },
};
</script>
