<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "FormGroup",
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unregisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
    validate() {
      return this.inputs.reduce((isValid, input) => {
        const isInputValid = input.validate();
        return isValid && isInputValid;
      }, true);
    },
    reset() {
      return this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
