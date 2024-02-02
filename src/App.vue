<template>
  <div id="app">
    <div class="content">
      <HeaderComponent />
      <h2>{{ text }}</h2>
      <ContainerView>
        <ApartmentFilterForm class="apartment-filter" @submit="filter" />
      </ContainerView>
      <ContainerView>
        <p v-if="!filteredApartments.length">Ups, nothing view</p>
        <ApartmentList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgsrc="apartment.imgUrl"
              :price="apartment.price"
          /></template>
        </ApartmentList>
      </ContainerView>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentItem.vue";
import ApartmentList from "./components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import ContainerView from "./components/shared/ContainerView.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import apartments from "./components/apartment/apartments";
export default {
  components: {
    ApartmentList,
    ApartmentsItem,
    ContainerView,
    ApartmentFilterForm,
    FooterComponent,
    HeaderComponent,
  },

  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByCityPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      console.log("Filtering by city:", city);
      console.log("Filtering by price:", price);
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      console.log("filterByCityName:", this.filters.city);

      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByCityPrice(apartments) {
      console.log("filterByCityPrice:", this.filters.price);

      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.actions {
  display: flex;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
.apartment-filter {
  margin-bottom: 40px;
}
</style>
