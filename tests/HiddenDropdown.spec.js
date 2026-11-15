const {test, expect}= require('@playwright/test')
const console = require('node:console')

test('Hidden options Dropdown', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("[name='username']").fill('Admin');
await page.locator("[name='password']").fill('admin123')
await page.locator("[type='submit']").click()
await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()

await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click()

await page.waitForTimeout(3000)

const options=await page.$$("//div[@role='listbox']//span")

for(let option of options)
{
    const jobtitle=await option.textContent();
    
    if(jobtitle.includes('QA Engineer'))
    {
        await option.click()
        break;
    }
}


await page.waitForTimeout(5000)


})