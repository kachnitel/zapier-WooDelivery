const {
  config: authentication,
  befores: authBefores,
  afters: authAfters
} = require('./authentication');
const config = require('./api/WooDelivery/config');

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,
  beforeRequest: [...authBefores],
  afterResponse: [...authAfters],

  ...config
};
