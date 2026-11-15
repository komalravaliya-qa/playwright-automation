const {test, expect} = require('@playwright/test')

test("handling table", async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

const table= await page.locator('#productTable')

const columns=await table.locator('thead tr th')
console.log('Number of columns:', await columns.count())
expect(await columns.count()).toBe(4)


const rows=await table.locator('tbody tr')
console.log('Numbers of rows:', await rows.count())
expect(await rows.count()).toBe(5)

/* const macthedrow= rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
})
await macthedrow.locator('input').check()
*/

//await selectproduct(rows,page,'Smartwatch')
//await selectproduct(rows,page,'Tablet')
//await selectproduct(rows,page,'Smartphone')

//Print all product details using loop
for(let i=0;i<await rows.count();i++)
{
    const row=rows.nth(i);
    const tds=row.locator('td')

    for(let j=0;j<await tds.count()-1;j++)
    {
        console.log(await tds.nth(j).textContent())
    }
}

//read data from all the pages in the tableconst pah
const pages=await page.locator('.pagination li a')
console.log('Number of pages in the table:', await pages.count())

for(let p=0;p<await pages.count();p++)
{
    if(p>0)
    {
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count();i++)
    {const row=rows.nth(i);
    const tds=row.locator('td')

    for(let j=0;j<await tds.count()-2;j++)
    {
        console.log(await tds.nth(j).textContent())
    } 
   
    }
     await page.waitForTimeout(5000)
}

})

async function selectproduct(rows, page, name)
{
    const macthedrow= rows.filter({
    has: page.locator('td'),
    hasText: name
})
await macthedrow.locator('input').check()
}
//await expect(columns).toHavecount(4)
