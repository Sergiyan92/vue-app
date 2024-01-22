<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Botton @click="increment">Click me</Botton>
  </div>
</template>

<script>
import Botton from "@/components/ButtonClick.vue";
export default {
  components: {
    Botton,
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
