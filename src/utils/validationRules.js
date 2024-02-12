export const isRequired = (val) => ({
  hasPass: !!val,
  message: "Please enter value",
});

export const charLimit = (limit) => (val) => ({
  hasPass: val.length <= limit,
  message: "Enter less value",
});
