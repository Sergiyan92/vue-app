<template>
  <ContainerView>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgsrc="imgUrl"
        :price="price"
      />
    </div>
  </ContainerView>
</template>

<script>
import ApartmentsItem from "./ApartmentItem.vue";
import ContainerView from "../shared/ContainerView";
export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
    ContainerView,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
