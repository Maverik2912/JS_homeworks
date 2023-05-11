// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function getMinValue(a,b,c) {
    let minValue = Infinity;
    let arr = [a,b,c];

    for (const num of arr) {
        if(num < minValue){
            minValue = num;
        }
    }
    return minValue;
}

console.log(getMinValue(5, 1, 0));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function getMaxValue(a,b,c) {
    let maxValue = -Infinity;
    let arr = [a,b,c];

    for (const num of arr) {
        if(num > maxValue){
            maxValue = num;
        }
    }
    return maxValue;
}

console.log(getMaxValue(9, 6, 8));



// - створити функцію яка повертає найбільше число з масиву
function getMaxValueFromArr(arr) {
    let maxValue = -Infinity;
    for (const item of arr) {
        if(item > maxValue){
            maxValue = item;
        }
    }
    return maxValue;
}

console.log(getMaxValueFromArr([1, 2, -4, 23, 45, -23, 7]));



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function calcAverage(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return (sum / arr.length) || 'Масив пустий або в ньому не тільки числа';
}

console.log(calcAverage([1,2,45,23,12]));



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function getMinPrintMax() {
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (const argument of arguments) {
        if(argument > maxValue){
            maxValue = argument;
        } else if(argument < minValue){
            minValue = argument;
        }
    }

    console.log(`Виводжу ${maxValue}`);
    return `Повертаю ${minValue}`;
}

console.log(getMinPrintMax(2, 4, 5, 6, 67, 1, -34));



// - створити функцію яка заповнює масив рандомними числами
function fillRandom(amount) {
    const arr = [];

    for (let i = 0; i < amount; i++) {
        // Я трохи змінив спосіб генерації рандомного числа, щоб крайні числа (0, 100) траплялися з однаковою частотою,
        // як і всі інші.
        arr[arr.length] = Math.floor(Math.random() * 101);
    }

    return arr;
}

console.log(fillRandom(10));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.

function fillRandomUntilLimit(amount, limit) {
    const arr = [];

    for (let i = 0; i < amount; i++) {
        arr[arr.length] = Math.floor(Math.random() * limit + 1);
    }

    return arr;
}

console.log(fillRandomUntilLimit(10, 50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverseArr(arr) {
    const newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }

    return newArr;
}

console.log(reverseArr([1, 2, 3]));


// - створити функцію, яка якщо приймає один аргумент, просто вивoдить його, якщо два аргументи -
// складає або конкатенує їх між собою.

function branches() {
    let res;

    if(arguments.length === 1){
        res = arguments[0];
    } else if(arguments.length === 2){
       res = arguments[0] + arguments[1]
    }

    return res;
}

console.log(branches(2));
console.log(branches(2, 'f'));


// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.

function calcSumSameIndex(arr1, arr2) {
    const resArr = [];

    for (let i = 0; i < arr1.length; i++) {
        resArr[resArr.length] = arr1[i] + arr2[i];
    }

    return resArr;
}

console.log(calcSumSameIndex([3, 4, 5], [5,6,8]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function getAllKeys(arr) {
    let keys = [];

    for (const obj of arr) {
        for (const key in obj) {
            keys[keys.length] = key;
        }
    }

    return keys;
}

console.log(getAllKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
function getAllValues(arr) {
    const keys = [];

    for (const obj of arr) {
        for (const key in obj) {
            keys[keys.length] = obj[key];
        }
    }

    return keys;
}

console.log(getAllValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));