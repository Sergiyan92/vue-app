<template>
  <button @click="handleClick" :class="buttonClass">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Натисни мене",
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        "primary-btn": this.primary,
        "secondary-btn": this.secondary,
      };
    },
  },
  methods: {
    handleClick() {
      // Тут можна додати логіку для обробки кліку
      console.log("Кнопка натиснута!");
    },
  },
};
</script>

<style scoped>
/* Додайте стилізацію кнопки тут */
button {
  padding: 10px 15px;
  cursor: pointer;
}

.primary-btn {
  background-color: #3498db;
  color: #fff;
}

.secondary-btn {
  background-color: #e74c3c;
  color: #fff;
}
</style>
