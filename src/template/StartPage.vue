<template>
  <div>
    <slot></slot>
    <footer class="footer"><slot name="footer" /></footer>
  </div>
</template>

<script>
export default {
  name: "StartPage",
};
</script>

<style lang="scss" scope>
.footer {
  margin-top: 2rem;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: $white;
}
</style>