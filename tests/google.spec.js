const { test, expect } = require('@playwright/test');

test("verify the application title", async ({ page }) => {
    await page.goto("https://www.google.com/");

    const url = page.url();
    console.log("The current url is: " + url);
    const title = await page.title();
    console.log("The current title is: " + title);
    await expect(page).toHaveTitle("Google");
})