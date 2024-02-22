<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <HeaderComponent />
      <router-view></router-view>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/header";
import Notifications from "./components/notifications";
export default {
  components: {
    FooterComponent,
    HeaderComponent,
    Notifications,
  },
  mounted() {},
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
}
</style>
