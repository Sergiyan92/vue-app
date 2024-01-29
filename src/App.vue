<template>
  <div id="app">
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
import apartments from "./components/apartment/apartments";
export default {
  components: { ApartmentList, ApartmentsItem },
  data() {
    return {
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
