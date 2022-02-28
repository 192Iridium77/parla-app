module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
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
  ignorePatterns: ["node_modules"],
};
