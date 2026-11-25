const { test, expect } = require('@playwright/test');
// Test that home page loads
test('homepage loads successfully', async ({ page }) => {
  const response = await page.goto('/');

  expect(response).not.toBeNull();
  expect(response.status()).toBe(200);

  await expect(page.locator('body')).toBeVisible();
});

// Test homepage has a document title
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
// Verify that your navigation links exist, are visible and point to valid destinations.
test('navigation links are visible', async ({ page }) => {
  await page.goto('/');

  const navigation = page.locator('nav');
  await expect(navigation).toBeVisible();

  const links = navigation.locator('a');
  await expect(links.first()).toBeVisible();

  expect(await links.count()).toBeGreaterThan(0);
});

// Test that internal links do not lead to missing pages
test('internal links do not return 404', async ({ page }) => {
  await page.goto('/');

  const links = await page.locator('a[href]').evaluateAll((elements) =>
    elements
      .map((element) => element.href)
      .filter((href) => {
        const url = new URL(href);
        return (
          url.origin === window.location.origin &&
          !url.hash &&
          !url.pathname.startsWith('/#')
        );
      }),
  );

  for (const link of [...new Set(links)]) {
    const response = await page.request.get(link);

    expect(response.status(), `Broken internal link: ${link}`).toBeLessThan(
      400,
    );
  }
});

// Test that images load successfully

test('all images load successfully', async ({ page }) => {
  await page.goto('/');

  const images = page.locator('img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const image = images.nth(i);

    await expect(image).toBeVisible();

    const loaded = await image.evaluate(
      (element) => element.complete && element.naturalWidth > 0,
    );

    expect(loaded, `Image at index ${i} failed to load`).toBe(true);
  }
});

// Images have alternative text : This is an important accessibility check.

test('images have alternative text', async ({ page }) => {
  await page.goto('/');

  const images = await page.locator('img').evaluateAll((elements) =>
    elements.map((image) => ({
      src: image.src,
      alt: image.getAttribute('alt'),
    })),
  );

  for (const image of images) {
    expect(image.alt, `Image is missing alt text: ${image.src}`).not.toBeNull();
  }
});

//Website has no horizontal overflow : This catches common responsive design problems.

test('homepage has no horizontal overflow', async ({ page }) => {
  await page.goto('/');

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
});

// Website works on mobile viewport

test('homepage renders correctly on mobile', async ({ page }) => {
  await page.setViewportSize({
    width: 375,
    height: 812,
  });

  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
});
