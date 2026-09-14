const {test, expect}=require('@playwright/test')
test.use({viewport:{width:1000,height:1000}})

test('verify the error message',async function({page}){ 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    page.viewportSize({width:1000,height:1000});
    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin1234");
    await page.locator("//button[@type='submit']").click();
    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("The error message is: " + errorMessage);
    expect(errorMessage).toBe("Invalid credentials"); 

   
})