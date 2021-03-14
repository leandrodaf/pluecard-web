<template>
  <auth-page>
    <template slot:default> Credit </template>
  </auth-page>
</template>

<script>
import AuthPage from "../template/AuthPage";

export default {
  name: "Credit",
  components: { AuthPage },
};
</script>
