const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('resources.task', () => {
  it('should run', async () => {
    const bundle = {
      inputData: {
        deliveryStartDate: "2024-01-01",
        deliveryDueDate: "2024-01-11"
      },
      authData: {
        apiKey: process.env.API_KEY
      }
    };

    const results = await appTester(App.resources.task.search.operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
