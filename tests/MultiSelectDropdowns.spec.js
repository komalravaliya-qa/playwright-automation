const {test, expect}= require('@playwright/test')

test("handle Multiple Dorpdowns", async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.selectOption("#colors", ['Blue', 'Red', 'Yellow'])

    //const options= await page.locator('#colors option')
    //await expect(options).toHaveCount(5)


    const options= await page.$$('#colors option')
    console.log("Number of options:", options.length)

    const content=await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()


    await page.waitForTimeout(5000)
})