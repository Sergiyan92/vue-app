<template>
  <div id="app">
    <ApartmentItem
      :descr="apartments.descr"
      :price="apartments.price"
      :rating="apartments.rating"
      imgsrc="https://fastly.picsum.photos/id/416/200/300.jpg?hmac=KIMUiPYQ0X2OQBuJIwtfL9ci1AGeu2OqrBH4GqpE7Bc"
    />
  </div>
</template>

<script>
import ApartmentItem from "./components/apartment/ApartmentItem";
export default {
  components: { ApartmentItem },
  data() {
    return {
      apartments: {
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
