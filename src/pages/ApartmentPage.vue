<template>
  <main class="apartment-page">
    <ContainerView>
      <div class="apartment-page__content">
        <ApartmentsMainIfo :apartment="apartment" />
        <ApartmentsOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </ContainerView>
  </main>
</template>

<script>
import ContainerView from "../components/shared/ContainerView.vue";
import ApartmentsMainIfo from "@/components/apartment/ApartmentsMainIfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import apartments from "../components/apartment/apartments";
export default {
  name: "ApartmentPage",
  components: { ContainerView, ApartmentsMainIfo, ApartmentsOwner },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
