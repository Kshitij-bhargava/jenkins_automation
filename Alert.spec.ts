import { test, expect, Dialog, Frame, FrameLocator, Locator } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { describe } from 'node:test';
import path from 'path';
import { exitCode } from 'process';
import { text } from 'stream/consumers';
import { __await } from 'tslib';

// can you please declare an arry in type script 

var abc: number[] = [1,5,6];
let tup = [5,"d",8];

var emp = {
name: 'mohan',
address: 'australia',
getaddress: function() {}
}

emp.getaddress = function()
{

  console.log(emp.name);
}


class AA
{

  a: String;
  c: number
}

class BB extends AA
{

  func():void
  {
console.log("");
  }
  
}


class E 
{
 g:String;
 h:number;

}
class D extends E
{

getstatus():void
{
}
}


var employee = 
{
  firstname: 'Ram',
  lastname: 'sharma',
  getname: function() {}
}

employee.getname = function()
{
  console.log(employee.firstname);
}

let arr5: Number[] = [5,5,6,8];
var b: number;

var mytub = [5,6,"dff"];
mytub.push("erer");
mytub.pop();


var k: Number[] = [5,6,8,4,1,3,7,2,9];
for(var l = 0; l<k.length;l++)
{

console.log(k[l]);

}

//declare a tuple 

var uy = [1,"G0","w"];
console.log[uy[2]];
let x: number;
x=1;
let str: String
let arr: String[] = ['a','b'];
let ab: number[] = [6,5];

let  n: number;
let  art: String[] = ['A','b'];

var  tub = [1,22,5,"A"];

let A:Number= 5;

let B:Number[] = [1,2,3];
let drpname: String;

for(var i = 0; i<art.length;i++)
{
    console.log(art[i])
}

var mytouble = [1,2,'A',25.25];
console.log(mytouble[0])

mytouble.push(5200);
mytouble.pop();


// declaring an object in typescript 

var emp4 = 
{
name: 'peter',
lastname: 'john',
add:function() {}
}

emp4.add = function()
{
  console.log('first name'  + emp.name)
}

var counts = ['df',52,'gf'];

//how to declare an array 

let bottles: number[] = [1,5,69,580];

let a :number = 4;


 // test('Open new tab', async ({ context, page }) => {
 /// await page.goto('https://www.checklyhq.com/');    
 // const [newPage] = await Promise.all([
 // context.waitForEvent('page'),
 // await page.getByRole('link', { name: 'Login' }).click()
 // ])
 // await expect(newPage).toHaveURL('https://auth.checklyhq.com/login?state=hKFo2SBGR2JGTzA4aTduWENXeUFOcElJZzRzOG5iZTVzSGp0V6FupWxvZ2luo3RpZNkga2dkZU1VLWd2eXJ0cEF2eGtZNG05cGpLZks5T1pWSTijY2lk2SB4ZzZJTWFKWGY2UDNJWVBvT1pHOEd0cDZNWXZhSlBlVQ&client=xg6IMaJXf6P3IYPoOZG8Gtp6MYvaJPeU&protocol=oauth2&prompt=select_account&audience=https%3A%2F%2Fapi.checklyhq.com&redirect_uri=https%3A%2F%2Fapp.checklyhq.com&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=QW9zSzI5SXFuODB5M1NCUjVHeFVxSXZpNnpnaUxBMS5EcUJ6em5EbmxhUA%3D%3D&code_challenge=5OAGCA6RyOjX3zV-F8lvkygV0LxU8HJitaGcS6jN8IM&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMyJ9');
 // await newPage.getByPlaceholder('yours@example.com').fill('abc.com');
//});

var employ = 
{
  id:"1",
  name:"name",
  getdata: function(){}
}

employ.getdata = function()
{
  console.log('this is the name' + employ.id);
}

//delcare an array 

var der: number[] = [4,5,6];
var ap:number = 5;



 test('pop up message testing', async ( { page } ) => { 
  test.setTimeout(60000);
  await page.goto('http://autopract.com/selenium/alert5/');
    await page.on('dialog', dialog => dialog.accept());
    await page.locator('#alert-button').click();
    await expect(page).toHaveURL('http://autopract.com/selenium/alert5/');
    await page.screenshot({path:'alert.png'});

//await page.keyboard.press("PageDown");
//await page.locator('css=input[name="agree"]').click();
 //locating throuh the id 
 //await page.locator('id=input-email').fill('bhargavafirst@gmail.com');
 //const pwd: Locator = page.locator('id=input-password');
 //await pwd.fill('Redball#123');
 //const btn: Locator =  await page.locator('text=Login');
 //await btn.click();
  //locating through the classname
// const logo: Locator = page.locator('.img-responsive');
 //const logoexits =  await logo.isDisabled();
 //console.log(logoexits);
 await expect(page).toHaveURL('http://autopract.com/selenium/alert5/');
 //this will not cloase br//owser until 30 secods 
//await new Promise(() => { })
  
 })
  

  


