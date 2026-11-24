const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Run tests in parallel where possible.
  fullyParallel: true,

  // Generate a readable HTML report.
  reporter: 'html',

  // Shared settings for all browser projects.
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Run the tests in these browser engines.
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],

  // Start the static site before tests and stop it afterwards.
  webServer: {
    command: 'pnpm exec serve . --listen tcp://127.0.0.1:4173 --no-clipboard',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
