const {test, expect}=require('@playwright/test')

test('My first test',async function({page}){

  expect(1+1).toBe(2)
})

test.skip('My second test',async function({page}){
  expect(2+2).toBe(5)
})

test('My third test',async function({page}){
  expect(2+3).toBe(5)
})

test('My fourth test',async function({page}){
  expect("Sahadev Aliabde").toContain("Sahadev")
  expect(true).toBeTruthy()
})

test('My fifth test',async function({page}){
  
  expect(false).toBeFalsy()
})

test('My sixth test',async function({page}){
  expect("Sahadev Alibade".includes("Sahadev")).toBeTruthy()
  
})