<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AuthFormContainer",
};
</script>

<style lang="scss" scoped>
.auth-container {
  padding: 30px;
  max-width: 410px;
  width: 100%;
  background: #fff;
}
</style>
