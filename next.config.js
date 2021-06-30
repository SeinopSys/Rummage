const { i18n } = require('./next-i18next.config.js');
const withPlugins = require('next-compose-plugins');
const withESLint = require('./utils/next-eslint');
const withCamelCaseCSSModules = require('./utils/next-css-modules');

module.exports = withPlugins([[withESLint], [withCamelCaseCSSModules]], {
  i18n,
});
