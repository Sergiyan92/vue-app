export const isRequired = (val) => ({
  hasPass: !!val,
  message: "Please enter value",
});

export const charLimit = (limit) => (val) => ({
  hasPass: val.length <= limit,
  message: "Enter less value",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Неверный имейл",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "Пароль должен содержать одну цифру и один символ",
});
