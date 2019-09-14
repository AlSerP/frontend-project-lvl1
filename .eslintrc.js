module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'browser': true
  },
  'extends': "eslint:recommended",
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
	"semi": ["error", "always"],
	"quotes": ["error", "double"]
  },
};
