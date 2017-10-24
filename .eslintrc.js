module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      'jsx-a11y/anchor-has-content': 2,
      'jsx-a11y/href-no-hash': 2,
      'jsx-a11y/label-has-for': 2,
      'jsx-a11y/heading-has-content': 2,
      'react/jsx-filename-extension': 0,
      "import/extensions": 0,
      "import/prefer-default-export": 0,
      "import/no-dynamic-require": 0,
      "import/no-extraneous-dependencies": [
        "error", {
          "devDependencies": [
            "src/js/**/*.test.js"
          ]
        }
      ],
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
            "config": "./webpack.config.js"
            }
        }
    }
};
