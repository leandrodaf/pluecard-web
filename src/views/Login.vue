<template>
  <div class="vue-tempalte">
    <b-form @submit.prevent="handleLogin">
      <b-form-group id="email" label="Email:" label-for="Email">
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Password:" label-for="Password">
        <b-form-input
          id="password"
          v-model="user.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import User from "../models/User";

export default {
  name: "Login",
  data() {
    return {
      user: new User(null, "", ""),
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    handleLogin() {
      if (this.user.email && this.user.password) {
        this.$store
          .dispatch("login", this.user)
          .then(() => this.$router.push({ name: "Home" }));
      }
    },
  },
};
</script>