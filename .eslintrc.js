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
      'react/jsx-filename-extension': 0
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    settings: {
        'import/resolver': {
            foo: { someConfig: value }
        }
    }
};
