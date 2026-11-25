const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  const response = await page.goto('/');

  expect(response).not.toBeNull();
  expect(response.status()).toBe(200);

  await expect(page.locator('body')).toBeVisible();
});

test('homepage has a document title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/\S+/);
});

test('homepage has no uncaught JavaScript errors', async ({ page }) => {
  const errors = [];

  page.on('pageerror', (error) => {
    errors.push(error.message);
  });

  await page.goto('/');

  expect(errors).toEqual([]);
});

test('navigation links are visible', async ({ page }) => {
  await page.goto('/');

  const navigation = page.locator('nav');
  await expect(navigation).toBeVisible();

  const links = navigation.locator('a');
  await expect(links.first()).toBeVisible();

  expect(await links.count()).toBeGreaterThan(0);
});
