<template>
  <main class="apartment-page">
    <ContainerView>
      <div class="apartment-page__content">
        <ApartmentsMainIfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </ContainerView>
  </main>
</template>

<script>
import ContainerView from "../components/shared/ContainerView.vue";
import ApartmentsMainIfo from "@/components/apartment/ApartmentsMainIfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import Reviews from "../components/reviews";
import reviewsList from "../components/reviews/reviews.json";
import apartments from "../components/apartment/apartments";

export default {
  name: "ApartmentPage",
  components: { ContainerView, ApartmentsMainIfo, ApartmentsOwner, Reviews },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  data() {
    return {
      reviewsList,
    };
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
