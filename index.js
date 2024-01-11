const {
  config: authentication,
  // authBefores: befores,
  // authAfters: afters
  befores,
  afters
} = require('./authentication');
const ResourceGenerator = require('./api/ResourceGenerator');
const actions = require('./api/WooDelivery/actions');

const generator = new ResourceGenerator();
const taskActions = generator.generateActions('TaskModel');

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
  // searches: {
  //   searchtask: taskActions['post_GetTasksRequest']
  // },

  // // If you want your creates to show up, you better include it here!
  // creates: {
  //   newtask: taskActions['post_NewTaskRequest'],
  //   updatetask: taskActions['post_UpdateTaskRequest']
  // },
  ...actions,

  resources: {
    // [taskResource.key]: generator.generateResource('TaskModel')
    'task': generator.getResource('task')
  },
};
