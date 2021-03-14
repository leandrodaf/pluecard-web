<template>
  <auth-page>
    <template slot:default> Question </template>
  </auth-page>
</template>

<script>
import AuthPage from "../template/AuthPage";

export default {
  name: "Question",
  components: { AuthPage },
};
</script>
