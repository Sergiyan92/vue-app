<template>
  <Form ref="form" @submit.prevent="handleSubmit">
    <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
    <CustomInput
      v-model="formData.password"
      name="password"
      :rules="passwordRules"
    />
    <ButtonClick type="submit">Click</ButtonClick>
  </Form>
</template>

<script>
import Form from "../shared/form";
import CustomInput from "../shared/CustomInput";
import ButtonClick from "../shared/ButtonClick";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";
export default {
  name: "LoginComponent",
  components: { Form, CustomInput, ButtonClick },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    emailRules() {
      return [this.rules.emailValidation, this.rules.isRequired];
    },
    passwordRules() {
      return [this.rules.passwordValidation, this.rules.isRequired];
    },
  },
};
</script>

<style lang="scss" scoped></style>
