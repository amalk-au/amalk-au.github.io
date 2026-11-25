# End-to-End Tests

This directory contains end-to-end (E2E) tests for the portfolio website, powered by [Playwright](https://playwright.dev/).

The tests run the website in real browser engines to verify that pages load correctly and that essential functionality works as expected.

## Test Structure

```
tests/
├── README.md
└── homepage.spec.cjs
```

- `homepage.spec.cjs` — Tests the homepage, including its HTTP response, document title, and uncaught JavaScript errors.

- `README.md` — Documentation for the test suite.

## Prerequisites

Before running the tests, make sure you have:

- Node.js installed.

- pnpm installed.

- Project dependencies installed.

- Playwright browser binaries installed.

To install the project dependencies:

```
pnpm install
```

To install the Playwright browsers:

```
pnpm exec playwright install
```

To install the browsers and their required system dependencies on Ubuntu:

```
pnpm exec playwright install --with-deps
```

## Running Tests

Run the complete test suite:

```
pnpm test
```

Run tests in a specific browser:

```
pnpm exec playwright test --project=chromium
pnpm exec playwright test --project=firefox
pnpm exec playwright test --project=webkit
```

Run tests with a visible browser window:

```
pnpm test:headed
```

Open Playwright's interactive UI:

```
pnpm test:ui
```

## Test Reports

Playwright generates an HTML report after test execution.

Open the latest report:

```
pnpm test:report
```

Test reports and temporary test results are generated locally and should not be committed to the repository.

## Local Development Server

Playwright uses the `webServer` configuration in `playwright.config.cjs` to start a local static server before running the tests.

The server is started automatically when needed, using the project's `serve` dependency:

```
pnpm exec serve . --listen 4173
```

The website is then available at:

```
http://127.0.0.1:4173
```

Playwright waits for the server to become available before executing the tests and can reuse an existing server when configured to do so.

No build step is required because the website uses native HTML, CSS, and JavaScript.

## Writing Tests

Create test files inside this directory using the `.spec.cjs` naming convention.

Example:

```
const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  const response = await page.goto('/');

  expect(response.status()).toBe(200);
  await expect(page.locator('body')).toBeVisible();
});
```

Playwright provides built-in fixtures such as `page` and `browser`, along with assertions through `expect`.

Useful resources:

- [Playwright documentation](https://playwright.dev/docs/intro)

- [Writing tests](https://playwright.dev/docs/writing-tests)

- [Locators](https://playwright.dev/docs/locators)

- [Assertions](https://playwright.dev/docs/test-assertions)

- [Configuration](https://playwright.dev/docs/test-configuration)

## Best Practices

- Write tests that verify observable website behaviour.

- Keep each test focused on a specific expectation.

- Use descriptive test names.

- Prefer Playwright's built-in locators and assertions.

- Avoid unnecessary dependencies and duplicated tests.

- Run the test suite before merging changes into `main`.

- Update tests whenever relevant website functionality changes.
