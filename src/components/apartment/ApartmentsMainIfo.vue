<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Raiting :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="img" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <Button @click="handleApartmentsBooking" :loading="isLoading"
        >Reserve</Button
      >
    </div>
  </article>
</template>

<script>
import Raiting from "../StarRaiting.vue";
import Button from "../shared/ButtonClick.vue";
import { bookApartment } from "../../services/order.service";
export default {
  name: "ApartmentsMainInfo",
  components: { Raiting, Button },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };
      try {
        this.isLoading = true;
        await bookApartment(body);
        this.$notify({
          type: "success",
          title: "Add succes",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Ups Error",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
