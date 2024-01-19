module.exports = class TaskResource {
  constructor(generator) {
    this.generator = generator;
    this.actions = generator.generateActions('TaskModel', 'task');
  }

  get resource() {
    return this.generator.getResource('task');
  }

  get searches() {
    return {
      post_GetTasksRequest: this.actions['post_GetTasksRequest']
    };
  }

  get creates() {
    return {
      post_NewTaskRequest: this.actions['post_NewTaskRequest'],
      post_UpdateTaskRequest: this.actions['post_UpdateTaskRequest']
    };
  }

  get searchOrCreates() {
    return {
      post_GetTasksRequest: {
        key: 'post_GetTasksRequest',
        display: {
          label: 'Search or Create Task',
          description: 'Search for Task with a given ID. If not found, create it.'
        },
        search: 'post_GetTasksRequest',
        create: 'post_NewTaskRequest'
      }
    };
  }
}
