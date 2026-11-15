const {test, expect} = require ('@playwright/test')
const { request } = require('node:http')
var userid;
test("Get users", async ({request}) => {
const response = await request.get(
  'https://reqres.in/api/users?page=2')
console.log(await response.json())
expect(response.status()).toBe(200)
})

test("Create users", async ({request}) => {
const response=await request.post('https://reqres.in/api/users',
    {
        data:{
            "name": "komal",
            "job": "New"
        },
        headers:{
            "Accept": "application/json"
        }
    })
console.log( await response.json())
expect(response.status()).toBe(201) 

var res = await response.json()
userid= res.id
})

test.only("Update users", async ({request}) => {
const response=await request.put('https://reqres.in/api/users/'+userid,
    {
        data:{
            "name": "komal",
            "job": "New Job"
        },
        headers:{
            "Accept": "application/json"
        }
    })
console.log( await response.json())
expect(response.status()).toBe(200) 

})
    

test("Delete users", async ({request}) => {

    
})