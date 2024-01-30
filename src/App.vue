<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
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
import CustomInput from "./components/shared/CustomInput.vue";
import ApartmentsItem from "./components/apartment/ApartmentItem.vue";
import ApartmentList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
export default {
  components: { ApartmentList, ApartmentsItem, CustomInput },
  data() {
    return {
      text: "",
      apartments,
    };
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
