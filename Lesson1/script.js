// Частина 1

const greeting = 'hello';
const domain = 'owu';
const domain2 = 'com';
const locale = 'ua';
const num1 = 1;
const num2 = 10;
const num3 = -999;
const num4 = 123;
const PI = 3.14;
const num5 = 2.7;
const num6 = 16;
const boolean1 = true;
const boolean2 = false;

console.log(greeting, domain, domain2, locale, num1, num2, num3, num4, PI, num5, num6, boolean1, boolean2);


// Частина 2

const firstName = 'Mykyta';
const middleName = 'Andriyovych';
const lastName = 'Kraskovskyi';

const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);


// Частина 3

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);


// Додаткове

const name = prompt('Enter your name:');
const fathersName = prompt('Enter your father\'s name:');
const surname = prompt('Enter your surname:');

const fullName = `${name} ${fathersName} ${surname}`;
console.log(fullName);
