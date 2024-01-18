<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <ButtonClick label="Основна кнопка" primary />
      <ButtonClick label="Допоміжна кнопка" secondary />
    </div>
  </div>
</template>

<script>
import ButtonClick from "@/components/ButtonClick.vue";

export default {
  components: {
    ButtonClick,
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
