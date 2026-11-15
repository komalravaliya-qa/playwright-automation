const {test, expect}= require('@playwright/test')
const console = require('node:console')

test('Auto SuggestDropdown', async ({page})=>{

await page.goto('https://www.redbus.in/')
 await page.locator('#srcinput').fill('Delhi')

 await page.waitForSelector(".commonSuggestionWrapper___ea3613")

 const fromCityOptions=await page.$$(".commonSuggestionWrapper___ea3613")

 for(let option of fromCityOptions)
 {
 const value=await option.textContent()
 if (value.includes('VaranasiBallia'))
 {
    await option.click()
    break;
 }
 
 }

await page.waitForTimeout(5000)


})