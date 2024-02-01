<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <ContainerView>
      <ApartmentFilterForm class="apartment-filter" @submit="logger" />
    </ContainerView>
    <ApartmentList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgsrc="apartment.imgUrl"
          :price="apartment.price"
      /></template>
    </ApartmentList>
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentItem.vue";
import ApartmentList from "./components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import ContainerView from "./components/shared/ContainerView.vue";
import apartments from "./components/apartment/apartments";
export default {
  components: {
    ApartmentList,
    ApartmentsItem,
    ContainerView,
    ApartmentFilterForm,
  },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log(value, "---form value");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.actions {
  display: flex;
}
.apartment-filter {
  margin-bottom: 40px;
}
</style>
