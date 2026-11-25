const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Run tests in parallel where possible.
  fullyParallel: true,

  // Prevent accidentally committing test.only in CI.
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI.
  retries: process.env.CI ? 2 : 0,

  // Limit workers in CI to avoid overloading the runner.
  workers: process.env.CI ? 2 : undefined,

  // Generate readable reports.
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'html',

  // Shared settings for all browser projects.
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Run tests in all three browser engines.
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

  // Start the website before tests and stop it afterwards.
  webServer: {
    command: 'pnpm exec serve . --listen tcp://127.0.0.1:4173 --no-clipboard',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
