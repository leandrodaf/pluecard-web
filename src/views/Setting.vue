<template>
  <auth-page>
    <template slot:default> Setting </template>
  </auth-page>
</template>

<script>
import AuthPage from "../template/AuthPage";

export default {
  name: "Setting",
  components: { AuthPage },
};
</script>
