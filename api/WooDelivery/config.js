const TaskResource = require('../../resources/task');
const ResourceGenerator = require('../ResourceGenerator');

const generator = new ResourceGenerator();

const task = new TaskResource(generator);
const models = [
  task
];

function getModelsConfig(models) {
  const config = {
    resources: {},
    searches: {},
    creates: {},
    searchOrCreates: {}
  };

  models.forEach(model => {
    config.resources[model.resource.key] = model.resource;
    config.searches = { ...config.searches, ...model.searches };
    config.creates = { ...config.creates, ...model.creates };
    config.searchOrCreates = { ...config.searchOrCreates, ...model.searchOrCreates };
  });

  return config;
}

module.exports = getModelsConfig(models);
