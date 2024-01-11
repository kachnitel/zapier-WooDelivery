const ResourceGenerator = require('../api/ResourceGenerator');

require('dotenv').config();

const generator = new ResourceGenerator();

const task = generator.generateResource('TaskModel');
const actions = generator.generateActions('TaskModel');

console.log('Task actions', Object.keys(actions));

task.search = actions['post_GetTasksRequest'];
task.search.display.label = 'Find a Task';

task.create = actions['post_NewTaskRequest'];
task.create.display.label = 'Create a Task';

// TODO: update?
module.exports = task;
