const{test, expect} = require('@playwright/test');

test('Handle Frames', async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

//total frames
const allframes=await page.frames()
console.log("Number of frames:", allframes.length)

//const var=await page.frame('name')

//const frame_1=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
//await frame_1.fill("[name='mytext1']", 'Hello');

const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
inputbox.fill("hello")
await page.waitForTimeout(5000);
}) 
