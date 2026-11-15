const {test, expect} = require('@playwright/test')

test("Date Picker", async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.fill('#datepicker', '10/24/2026')

const year="2026"
const month="October"
const date="24"

await page.click('#datepicker')

while(true)
{
    const currentyear=await page.locator('.ui-datepicker-year').textContent()
    const currentmonth=await page.locator('.ui-datepicker-month').textContent()

    if(currentyear == year && currentmonth == month)
    {
        break;
    }
await page.locator('[title="Next"]').click()

}

const dates=await page.$$("//a[@class='ui-state-default']")
/*
for (const dt of dates)
{
    if(await dt.textContent()==dates)
    {
        await dt.click();
        break;
    }
}
*/
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


await page.waitForTimeout(5000)


})