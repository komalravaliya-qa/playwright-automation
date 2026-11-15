const {test, expect} = require('@playwright/test')

test("Handle Checkboxes",async({page})=> {
await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("//input[@id='monday']").check()

expect(await page.locator("//input[@id='monday']")).toBeChecked()

const CheckboxLocators= [
    "//input[@id='monday']",
    "//input[@id='friday']",
    "//input[@id='thursday']"
]

for (const locator of CheckboxLocators)
{
    await page.locator(locator).check();
}

for(const locator of CheckboxLocators)
{
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck()
    }
}

})