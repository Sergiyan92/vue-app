<template>
  <div id="app">
    <ApartmentList :items="apartments" />
  </div>
</template>

<script>
import ApartmentList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
export default {
  components: { ApartmentList },
  data() {
    return {
      apartments,
      apartment: {
        descr: "loren10",
        price: 10,
        rating: 4.5,
        imgsrc:
          "https://fastly.picsum.photos/id/416/200/300.jpg?hmac=KIMUiPYQ0X2OQBuJIwtfL9ci1AGeu2OqrBH4GqpE7Bc",
      },
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
