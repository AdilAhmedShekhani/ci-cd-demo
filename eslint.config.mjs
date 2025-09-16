module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true, // ✅ Add this line
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
