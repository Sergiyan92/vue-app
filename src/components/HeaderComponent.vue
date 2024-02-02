<template>
  <header class="header">
    <ContainerView><Logo /></ContainerView>
  </header>
</template>

<script>
import ContainerView from "./shared/ContainerView.vue";
import Logo from "./LogoComponent.vue";
export default {
  name: "HeaderComponent",
  components: { ContainerView, Logo },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
