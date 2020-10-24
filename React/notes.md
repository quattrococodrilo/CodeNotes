## Start environment
npm init -y

## Basic structure
mkdir -p src/components src/containers && touch src/index.js && mkdir public && touch public/index.html

## React
npm install react react-dom

## Webpack
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev

## Webpack dev server
npm install webpack-dev-server --save-dev

## Package used to load images
npm install file-loader --save-dev

## Babel
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

## Sass
npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev

## Lint
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

## Bootstrap
npm install bootstrap jquery popper.js --save-dev

## Configuration files
.babelrc
.eslintrc
.gitignore
package.json
webpack.config.js

## Full command
npm install webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server install file-loader@babel/core babel-loader @babel/preset-env @babel/preset-react install mini-css-extract-plugin css-loader node-sass sass-loader install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
