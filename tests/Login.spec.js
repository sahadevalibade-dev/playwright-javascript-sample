const {test, expect}=require('@playwright/test');



test("valid Login",async function({page}){
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  page.viewportSize({width:1000,height:1000});
  await page.getByPlaceholder("Username").fill("Admin",delay=200);
  
  await page.locator("//input[@placeholder='Password']").fill("admin123",delay=200);
  
  await page.locator("//button[@type='submit']").click();

  await page.waitForTimeout(5000);

  await expect(page).toHaveTitle("OrangeHRM");
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  await page.getByAltText("profile picture").first().click();
  await page.getByText("Logout").click();

  await page.waitForTimeout(5000);  

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})