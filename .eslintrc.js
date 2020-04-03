const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: path.join(__dirname, "./tsconfig.json"),
    sourceType: "module"
  },
  plugins: [],
  extends: [],
  rules: {}
};
