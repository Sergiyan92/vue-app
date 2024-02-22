<template>
  <header class="header">
    <ContainerView>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </ContainerView>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import ContainerView from "../shared/ContainerView.vue";
import Logo from "../LogoComponent.vue";
import AuthActions from "./AuthActions.vue";
import AccountActions from "./AccountActions.vue";
export default {
  name: "HeaderComponent",
  components: {
    ContainerView,
    Logo,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
