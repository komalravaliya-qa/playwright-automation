const {test, expect} =require('@playwright/test')
test ('Mouse Right Click', async({page})=>{

await page.goto()

const button = await page.locator('')
await button.click({button: 'right'})

await page.waitForTimeout(5000)

})
