<template>
  <div class="reviews-heading">
    <Avatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <Raiting :rating="rating" />
    </div>
  </div>
</template>

<script>
import Avatar from "./ReviewsAvatar.vue";
import Raiting from "../../StarRaiting.vue";
export default {
  name: "ReviewsHeading",
  components: { Raiting, Avatar },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
