var restrictedGlobals = require("confusing-browser-globals");

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
	"default-case": "off",
	"func-style": ["warn", "declaration"],
    "import/named": "off",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "max-len": ["error", { "code": 120, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": "off",
	"no-restricted-globals": ["error"].concat(restrictedGlobals),
    "object-curly-newline": ["error", { "ImportDeclaration": { "multiline": true } }],
    "react/destructuring-assignment": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
	"semi": ["error", "always"],
	"jsx-a11y/click-events-have-key-events": "off",
	"jsx-a11y/no-static-element-interactions": "off",
	"jsx-a11y/no-noninteractive-element-interactions": "off",
	
	// @typescript-eslint/recommended
	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/array-type": ["error", { default: "array-simple" }],
	"@typescript-eslint/ban-ts-ignore": "error",
	"@typescript-eslint/ban-types": "error",
	"camelcase": "off",
	"@typescript-eslint/camelcase": "error",
	"@typescript-eslint/class-name-casing": "error",
	"@typescript-eslint/consistent-type-assertions": "error",
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/interface-name-prefix": "off",
	"@typescript-eslint/member-delimiter-style": "error",
	"no-array-constructor": "off",
	"@typescript-eslint/no-array-constructor": "error",
	"no-empty-function": "off",
	"@typescript-eslint/no-empty-function": "error",
	"@typescript-eslint/no-empty-interface": "error",
	"@typescript-eslint/no-explicit-any": "warn",
	"@typescript-eslint/no-inferrable-types": "error",
	"@typescript-eslint/no-misused-new": "error",
	"@typescript-eslint/no-namespace": "error",
	"@typescript-eslint/no-non-null-assertion": "warn",
	"@typescript-eslint/no-this-alias": "error",
	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": "error",
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": "error",
	"@typescript-eslint/no-var-requires": "error",
	"@typescript-eslint/prefer-namespace-keyword": "error",
	"@typescript-eslint/triple-slash-reference": "error",
	"@typescript-eslint/type-annotation-spacing": "error",
	"no-var": "error",
	"prefer-const": "error",
	"prefer-rest-params": "error",
	"prefer-spread": "error"
  }
};
