<template>
  <ContainerView>
    <h1>Apartment Page</h1>
  </ContainerView>
</template>

<script>
import ContainerView from "../components/shared/ContainerView.vue";
export default {
  name: "ApartmentPage",
  components: { ContainerView },
  mounted() {
    // this.$router;

    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
