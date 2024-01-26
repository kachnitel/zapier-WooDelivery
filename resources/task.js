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
    // WooDelivery swagger spec calls /deletetask a DeleteTaskStatusRequest POST
    // Also real return body is {"code": "200","msg": "Success"}
    // So we need to override the operation.perform to not look for response.json.data
    const deleteAction = this.actions['post_DeleteTaskStatusRequest'];
    deleteAction.display.label = 'Delete Task';
    deleteAction.operation.perform = async (z, bundle) => {
      const response = await z.request({
        url: `${process.env.BASE_URL}/api/form/deletetask`,
        method: 'POST',
        body: bundle.inputData,
        headers: { 'Content-Type': 'application/json' }
      });

      return response.json;
    }

    return {
      post_NewTaskRequest: this.actions['post_NewTaskRequest'],
      post_UpdateTaskRequest: this.actions['post_UpdateTaskRequest'],
      post_DeleteTaskStatusRequest: deleteAction
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
