const {
  config: authentication,
  // authBefores: befores,
  // authAfters: afters
  befores,
  afters
} = require('./authentication');
// const recipeCreates = require('./creates/recipe.js~');
const taskResource = require("./resources/task");

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  // triggers: {},

  // If you want your searches to show up, you better include it here!
  // searches: {},

  // If you want your creates to show up, you better include it here!
  // creates: {
    // ...recipeCreates
  // },

  resources: {
    [taskResource.key]: taskResource
  },
};
