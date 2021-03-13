<template>
  <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
    <div class="border-bottom w-100 ml-5" />
    <span class="px-2 small text-muted font-weight-bold text-muted">
      <slot></slot>
    </span>
    <div class="border-bottom w-100 mr-5" />
  </div>
</template>
<script>
export default {
  name: "Separate",
};
</script>