const { test, expect} = require('@playwright/test');

test('Inner Frames', async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')
 const frame3 = page.frameLocator('[src="frame_3.html"]');

// const input= await frame3.locator("input[name='mytext3']")

//await input.fill('welcome')

 const childFrame = frame3.frameLocator('iframe');
await childFrame.locator("//*[@id='i6']/div[3]/div")
await page.waitForTimeout(5000)

})