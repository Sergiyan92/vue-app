<template>
  <AuthFormContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="registration__form">
      <CustomInput
        v-model="formData.name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        class="registration__input"
        style="width: 350px; margin-bottom: 23px"
      />
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="registration__input"
        style="width: 350px; margin-bottom: 23px"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
        style="width: 350px; margin-bottom: 23px"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        placeholder="Confirm password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
        style="width: 350px"
      />
      <ButtonClick class="registration__btn" type="submit" :loading="loading">
        Enter</ButtonClick
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
  name: "RegistrationForm",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    async handleSubmit() {
      const { form } = this.$refs;

      const { name, password, email } = this.formData;
      try {
        this.loading = true;

        await this.registerUser({
          name,
          password,
          email,
        });

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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.emailValidation, this.rules.isRequired];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Wrong password",
        }),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
