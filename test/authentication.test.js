/* globals describe, it, expect */

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('custom auth', () => {
  it('passes authentication and returns json', async () => {
    const bundle = {
      authData: {
        apiKey: process.env.API_KEY
      },
    };

    const response = await appTester(App.authentication.test, bundle);
    // expect(response.data).toHaveProperty('username');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('msg');
    expect(response.data.msg).toBe('Success');
  });

  it('fails on bad auth', async () => {
    const bundle = {
      authData: {
        apiKey: 'bad',
      },
    };

    try {
      await appTester(App.authentication.test, bundle);
    } catch (error) {
      expect(error.message).toContain('Error: Invalid API Key!');
      return;
    }
    throw new Error('appTester should have thrown');
  });
});
