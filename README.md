# Playing with Webpack 🤙

## Building 🔨

### Manually

```jsx
npx webpack --entry ./index.js --output ./bundle.js —mode production
```

### With package.json

```jsx
"scripts": {
    "build": "webpack"
  },
```

### webpack.config
```jsx
const path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}
```

## Multiple entry points 🔀

```jsx
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/index.js'),
    contact: path.resolve(__dirname, 'src/contact.js'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
```
