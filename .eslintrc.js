module.exports = {
  extends: ["expo", "eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
  },
  env: {
    browser: true,
    node: true,
  },
};
