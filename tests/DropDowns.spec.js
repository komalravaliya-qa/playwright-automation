const {test, expect} = require('@playwright/test')

test("Handle dropdowns", async({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("#country").selectOption('India')

//const option= await page.$$('#country option')
//console.log("Number of Options", option.length)
//await expect(option.length).toBe(10)

//const content=await page.locator('#country').textContent()
//await expect(content.includes('India')).toBeTruthy()

const options= await page.$$('#country')

for(const option of options)
{

    let value= await option.textContent()
    if(value.includes('France'))
    {
        statusbar=true
        break
    }
}
expect(statusbar).toBeTruthy()


await page.waitForTimeout(5000)




})