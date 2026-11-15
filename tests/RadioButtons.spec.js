const{ test, expect }= require('@playwright/test')

test('Handle inputbox', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("//input[@id='female']").check();

await expect(await page.locator("//input[@id='female']")).toBeChecked();

await expect(await page.locator("//input[@id='female']").isChecked()).toBeTruthy()

await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy()

await page.waitForTimeout(12000)
})