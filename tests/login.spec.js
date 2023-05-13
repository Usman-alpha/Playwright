const {test, expect}= require('@playwright/test');

test('Login to Application with valid credentials.', async ({page}) => {
    //Navigate to application
    await page.goto('YOUR_DOMAIN_URL', { timeout: 60000 });
    await expect(page).toHaveTitle('Iftradi')

    //Pause flow to debug or some other oeprations
    // await page.pause();

    //Locate and enter credentials in email field
    await page.locator('YOUR_LOCATOR').fill('YOUR_EMAIL_ADDRESS');
    //Example
    // await page.locator('[placeholder="Email"]').fill('YOUR_EMAIL_ADDRESS');

    // await page.pause();

    //Locate and enter credentials in password field.
    await page.locator('YOUR_LOCATOR').fill('YOUR_PASSWORD');
    //Example
    // await page.locator('[placeholder="Password"]').fill('YOUR_PASSWORD');

    // await page.pause();

    //Locate and click autonomously on submit button to login
    await page.locator('YOUR_LOCATOR').click();
    //Example
    await page.locator('button.btn.btn-primary > span.ml-50').click();

    // await page.pause();

    //Logout from the application
    //This is in case your logout is in some dropdown. You have to locate and click dropdown and then click on logout.
    await page.locator('YOUR_LOCATOR').click();
    //Example
    //await page.locator('.sc-jSUZER.cbkCTY').click();

    await page.pause();

    await page.locator('YOUR_LOCATOR').click();
    //Example
    await page.locator('button:has-text("Log Out")').click();
});