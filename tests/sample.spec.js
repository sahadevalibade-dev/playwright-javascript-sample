const{test, expect} = require('@playwright/test');
test('home page has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/i);

  // create a locator
  const getstatred = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getstatred).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getstatred.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});