const chalk = require('chalk');
const ResourceGenerator = require('../api/ResourceGenerator');

const generator = new ResourceGenerator();
const resources = generator.generate();

Object.keys(resources).forEach(key => {
  const resource = resources[key];
  let model = resource.noun + 'Model';
  let actions = generator.generateActions(model);

  process.stdout.write(chalk.bold.green(resource.noun) + ' ');
  process.stdout.write(chalk.yellow('Actions:\n'));
  Object.keys(actions).forEach(action => {
    process.stdout.write(chalk.green(`- ${action}\n`));
  });
});
