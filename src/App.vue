<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <StarRaiting :rating="4.5" />
  </div>
</template>

<script>
import StarRaiting from "./components/StarRaiting.vue";
export default {
  components: {
    StarRaiting,
  },
  data() {
    return {
      amountofClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amoun of clicks ${this.amountofClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountofClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
