const { test, expect } = require('@playwright/test');

const samplePage = `
  <html>
    <body>
      <h1>Example Domain</h1>
      <a href="#iana-details">More information...</a>
      <section id="iana-details">
        <p>Sample data for Playwright learning.</p>
      </section>
    </body>
  </html>
`;

test.describe('Playwright Learning Basics', () => {

  test.beforeEach(async ({ page }) => {
    await page.setContent(samplePage);
  });

  test('Step 1: Navigate and check page elements', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
  });

  test('Step 2: Interact with links and assertions', async ({ page }) => {
    const infoLink = page.locator('a:has-text("More information...")');
    await expect(infoLink).toBeVisible();

    await infoLink.click();

    await expect(page).toHaveURL(/#iana-details/);
    await expect(page.locator('#iana-details')).toContainText('Sample data for Playwright learning.');
  });

});
