const { useBabelRc, override } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(useBabelRc(), alias(configPaths('./tsconfig.json')));
