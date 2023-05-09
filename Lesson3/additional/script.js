// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const nums = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c', 'd', 'e'];
const mix = [1, 2, 'f', 'e', true];
console.log(nums, letters, mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const emptyArr = [];
emptyArr[0] = 'Hello';
emptyArr[1] = 'world';
console.log(emptyArr);

// - є масив
const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


// 1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log('        ');

//     2. перебрати його циклом for
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}
console.log('        ');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let c = 0;
while (c < arr.length) {
    if (c % 2) {
        console.log(arr[c]);
    }
    c++;
}
console.log('        ');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr.length; j++) {
    if (j % 2) {
        console.log(arr[j]);
    }
}
console.log('        ');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let counter = 0;
while (counter < arr.length) {
    if (!(arr[counter] % 2)) {
        console.log(arr[counter]);
    }
    counter++;
}
console.log('        ');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr.length; j++) {
    if (!(arr[j] % 2)) {
        console.log(arr[j]);
    }
}
console.log('        ');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let number of arr) {
    if (!(number % 3)) {
        number = 'okten';
    }
    console.log(number);
}
console.log('        ');

// 8. вивести масив в зворотньому порядку.
for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}
console.log('        ');


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of arr1) {
    console.log(number);
}
console.log('        ');


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (const string of arr2) {
    console.log(string);
}
console.log('        ');


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arr3 = [1, 2, 3, '4', '5', '6', true, false, null, 'okten'];
for (const item of arr3) {
    console.log(item);
}
console.log('        ');


// - За допомогою if та typeof вивести тільки булеві елементи
for (const item of arr3) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}
console.log('        ');


// - За допомогою if та typeof вивести тільки числові елементи
for (const item of arr3) {
    if (typeof item === 'number') {
        console.log(item);
    }
}
console.log('        ');


// - За допомогою if та typeof вивести тільки рядкові елементи
for (const item of arr3) {
    if (typeof item === 'string') {
        console.log(item);
    }
}
console.log('        ');


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
const arr4 = [];
arr[0] = 1;
arr[1] = '1';
arr[2] = true;
arr[3] = false;
arr[4] = null;
arr[5] = 12;
arr[6] = 'string';
arr[7] = true;
arr[8] = 45;
arr[9] = 'some';

for (const item of arr4) {
    console.log(item);
}
console.log('        ');


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10 ; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}
console.log('        ');


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100 ; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}
console.log('        ');


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100 ; i += 2) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}
console.log('        ');


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100 ; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}
console.log('        ');


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100 ; i++) {
    if (i % 2) {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}
console.log('        ');

