module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: "prettier",
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"]
  }
};
