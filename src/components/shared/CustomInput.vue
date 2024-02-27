<template>
  <div class="wrapper-input">
    <input
      v-model="inputValue"
      v-bind="$attrs"
      @blur="blurHandler"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  inject: {
    form: {
      default: null,
    },
  },
  data() {
    return {
      error: "",
      isFirstInput: true,
      isValid: true,
      inputValue: null,
    };
  },
  watch: {
    value() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPass, message } = rule(value);

        if (!hasPass) {
          this.error = message || this.errorMessage;
        }
        return hasPass;
      });
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }

      this.isFirstInput = false;
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit("input", "");
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;
    this.form.unregisterInput(this);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
