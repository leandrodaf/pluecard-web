<template>
  <button type="button" class="facebook-button">
    <span class="facebook-button__icon">
      <b-icon-facebook />
    </span>
    <span class="facebook-button__text"
      ><slot>Sign in with facebook</slot></span
    >
  </button>
</template>

<script>
export default {
  name: "FacebookButton",
};
</script>


<style lang="scss" scope>
.facebook-button {
  height: 40px;
  border-width: 0;
  background: #3a5a97;
  color: #ffffff;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;

  &:focus,
  &:hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #3a5ea0;
    box-shadow: none;
    transition-duration: 10ms;
  }
}

.facebook-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.facebook-button__icon--plus {
  width: 27px;
}

.facebook-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 18px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}
</style>