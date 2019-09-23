module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-plugin-import/config/errors",
    "eslint-plugin-import/config/warnings",
    "eslint-plugin-import/config/typescript"
  ].map(require.resolve),
  "env": {
    "browser": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
	"eslint-plugin-import"
  ],
  "rules": {
    "array-bracket-spacing": ["error", "always"],
    "comma-dangle": "off",
    "import/named": "off",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "max-len": ["error", { "code": 120, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "object-curly-newline": ["error", { "ImportDeclaration": { "multiline": true } }],
    "react/destructuring-assignment": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
    "@typescript-eslint/no-unused-vars": "error"
  }
};
