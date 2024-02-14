<template>
  <AuthFormContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        type="password"
        :rules="passwordRules"
        class="login__input"
      />
      <ButtonClick class="login__btn" type="submit">Enter</ButtonClick>
    </Form>
  </AuthFormContainer>
</template>

<script>
import Form from "../../shared/form";
import CustomInput from "../../shared/CustomInput";
import ButtonClick from "../../shared/ButtonClick";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import MainTitle from "../../shared/MainTitle";
import { loginUser } from "../../../services/auth.services.js";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
export default {
  name: "LoginComponent",
  components: {
    Form,
    CustomInput,
    ButtonClick,
    AuthFormContainer,
    MainTitle,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      try {
        const { data } = await loginUser(this.formData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }

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
      return [this.rules.isRequired];
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
