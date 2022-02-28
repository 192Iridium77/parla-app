module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    "import/extensions": [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
};
