<template>
  <auth-page>
    <template slot:default> Card </template>
  </auth-page>
</template>

<script>
import AuthPage from "../template/AuthPage";

export default {
  name: "Card",
  components: { AuthPage },
};
</script>
