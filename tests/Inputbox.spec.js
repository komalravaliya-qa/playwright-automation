const{ test, expect }= require('@playwright/test')

test('Handle inputbox', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await expect(await page.locator("//input[@id='name']")).toBeVisible()
await expect(await page.locator("//input[@id='name']")).toBeEmpty()
await expect(await page.locator("//input[@id='name']")).toBeEditable()


await page.locator("//input[@id='name']").fill("komalr")

await page.waitForTimeout(5000)




})