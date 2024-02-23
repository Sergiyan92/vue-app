<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <ContainerView>
        <section class="my-orders-page__content">
          <MainTitle>Orders</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </ContainerView>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import ContainerView from "../components/shared/ContainerView.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import OrdersList from "@/components/my-orders/OrdersList.vue";
import { getOrders } from "@/services/order.service";
export default {
  name: "MyOrders",
  components: {
    SectionWithHeaderSpacer,
    ContainerView,
    MainTitle,
    OrdersList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: "error",
        text: "Ups error",
        title: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
