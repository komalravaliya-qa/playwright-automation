const { test, expect } = require("@playwright/test")

test("Bootstrap DropDown", async({page})=> {

    await page.goto('https://mdbootstrap.com/docs/standard/extended/multiselect/')
    
    await page.locator('#select-input-395084').click()


    const dropdown= page.locator('select.select-initialized')
    const options= dropdown.locator('option')


    const value= await options.textContent()
if (value.includes('Two') || value.includes('Three'))
{
    await options.click()
}
    await page.waitForTimeout(5000)

})