<template>
  <div id="app">
    <Botton>Click me</Botton>
  </div>
</template>

<script>
import Botton from "@/components/ButtonClick.vue";
export default {
  components: {
    Botton,
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
