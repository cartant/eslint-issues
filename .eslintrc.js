const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: path.join(__dirname, "./tsconfig.json"),
    sourceType: "module"
  },
  plugins: ["etc", "rxjs", "rxjs-angular"],
  extends: [],
  rules: {
    "rxjs/no-async-subscribe": "error",
  }
};
