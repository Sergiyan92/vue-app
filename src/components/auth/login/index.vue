<template>
  <AuthFormContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        autocomplete="email"
        :rules="emailRules"
        class="login__input"
        style="width: 350px; margin-bottom: 23px"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        :rules="passwordRules"
        style="width: 350px"
        class="login__input"
      />
      <ButtonClick class="login__btn" type="submit" :loading="loading"
        >Enter</ButtonClick
      >
    </Form>
  </AuthFormContainer>
</template>

<script>
import { mapActions } from "vuex";
import Form from "../../shared/form";
import CustomInput from "../../shared/CustomInput";
import ButtonClick from "../../shared/ButtonClick";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import MainTitle from "../../shared/MainTitle";

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
export default {
  name: "LoginForm",
  components: {
    Form,
    CustomInput,
    ButtonClick,
    AuthFormContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    async handleSubmit() {
      const { form } = this.$refs;

      try {
        this.loading = true;

        await this.loginUser(this.formData);

        this.$router.push({ name: "home" });
        form.reset();
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error complited",
          text: error.message,
        });
      } finally {
        this.loading = false;
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
