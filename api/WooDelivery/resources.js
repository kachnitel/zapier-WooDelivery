const ResourceGenerator = require('../ResourceGenerator');

const generator = new ResourceGenerator();

modules.exports = {
  resources: {
    'task': generator.getResource('task')
  }
}
