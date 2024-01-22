<template>
  <div v-if="isVisible">
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>
    <ul>
      <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
    </ul>
    <h2 v-show="false">Title:Directives</h2>
  </div>
</template>

<script>
export default {
  name: "DirectiveTest",
  data() {
    return {
      isVisible: true,
      fruits: ["apple", "banana", "kiwi"],
      cars: {
        bmw: {
          color: "red",
        },
        audi: {
          color: "blue",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
