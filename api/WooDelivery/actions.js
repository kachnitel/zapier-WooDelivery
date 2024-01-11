const ResourceGenerator = require('../ResourceGenerator');

const generator = new ResourceGenerator();

const taskActions = generator.generateActions('TaskModel');

module.exports = {
  searches: {
    post_GetTasksRequest: taskActions['post_GetTasksRequest']
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    post_NewTaskRequest: taskActions['post_NewTaskRequest'],
    post_UpdateTaskRequest: taskActions['post_UpdateTaskRequest']
  }
}
