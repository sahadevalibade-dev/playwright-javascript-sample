# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> valid Login
- Location: tests\Login.spec.js:5:1

# Error details

```
ReferenceError: delay is not defined
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [active] [ref=e22]
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [ref=e29]
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
        - separator [ref=e34]
        - paragraph [ref=e36]: Or login with
        - generic [ref=e37]:
          - generic "Test Provider 1789380079037" [ref=e38] [cursor=pointer]:
            - paragraph [ref=e39]: Test Provider 1789380079037
          - generic "Anshu2ddf2e71" [ref=e40] [cursor=pointer]:
            - paragraph [ref=e41]: Anshu2ddf2e71
          - generic "Test Provider 1789380828371" [ref=e42] [cursor=pointer]:
            - paragraph [ref=e43]: Test Provider 1789380828371
          - generic "Test Provider 1789381079092" [ref=e44] [cursor=pointer]:
            - paragraph [ref=e45]: Test Provider 1789381079092
          - generic "Test Provider 1789381278532" [ref=e46] [cursor=pointer]:
            - paragraph [ref=e47]: Test Provider 1789381278532
          - generic "Test Provider 1789381408847" [ref=e48] [cursor=pointer]:
            - paragraph [ref=e49]: Test Provider 1789381408847
          - generic "Test Provider 1789381597995" [ref=e50] [cursor=pointer]:
            - paragraph [ref=e51]: Test Provider 1789381597995
          - generic "Anshu75994bca" [ref=e52] [cursor=pointer]:
            - paragraph [ref=e53]: Anshu75994bca
          - generic "Test Provider 1789381697509" [ref=e54] [cursor=pointer]:
            - paragraph [ref=e55]: Test Provider 1789381697509
          - generic "Anshu1ef9e6d5" [ref=e56] [cursor=pointer]:
            - paragraph [ref=e57]: Anshu1ef9e6d5
          - generic "Test Provider 1789381847289" [ref=e58] [cursor=pointer]:
            - paragraph [ref=e59]: Test Provider 1789381847289
          - generic "Anshu09a290d0" [ref=e60] [cursor=pointer]:
            - paragraph [ref=e61]: Anshu09a290d0
          - generic "Test Provider 1789381948494" [ref=e62] [cursor=pointer]:
            - paragraph [ref=e63]: Test Provider 1789381948494
          - generic "Anshu4e6823de" [ref=e64] [cursor=pointer]:
            - paragraph [ref=e65]: Anshu4e6823de
          - generic "Test Provider 1789382058375" [ref=e66] [cursor=pointer]:
            - paragraph [ref=e67]: Test Provider 1789382058375
          - generic "Anshu07ed6088" [ref=e68] [cursor=pointer]:
            - paragraph [ref=e69]: Anshu07ed6088
          - generic "Test Provider 1789382301655" [ref=e70] [cursor=pointer]:
            - paragraph [ref=e71]: Test Provider 1789382301655
          - generic "Anshu5fdbcc26" [ref=e72] [cursor=pointer]:
            - paragraph [ref=e73]: Anshu5fdbcc26
      - generic [ref=e74]:
        - generic [ref=e75]:
          - link [ref=e76] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e79] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e82] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e85] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e88]:
          - paragraph [ref=e89]: OrangeHRM OS 5.9
          - paragraph [ref=e90]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e91] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e92]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | const {test, expect}=require('@playwright/test');
  2  | 
  3  | 
  4  | 
  5  | test("valid Login",async function({page}){
  6  |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  7  |   page.viewportSize({width:1000,height:1000});
> 8  |   await page.getByPlaceholder("Username").fill("Admin",delay=200);
     |                                                             ^ ReferenceError: delay is not defined
  9  |   
  10 |   await page.locator("//input[@placeholder='Password']").fill("admin123",delay=200);
  11 |   
  12 |   await page.locator("//button[@type='submit']").click();
  13 | 
  14 |   await page.waitForTimeout(5000);
  15 | 
  16 |   await expect(page).toHaveTitle("OrangeHRM");
  17 |   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  18 | 
  19 |   await page.getByAltText("profile picture").first().click();
  20 |   await page.getByText("Logout").click();
  21 | 
  22 |   await page.waitForTimeout(5000);  
  23 | 
  24 |   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  25 | 
  26 | })
```