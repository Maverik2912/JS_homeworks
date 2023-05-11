// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectArea(a, b) {
    return a * b;
}

console.log(calcRectArea(5, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcCircleArea(r) {
    return Math.PI * (r ** 2);
}

console.log(calcCircleArea(6));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinderArea(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log(calcCylinderArea(10, 6));


// - створити функцію яка приймає масив та виводить кожен його елемент
function iterator(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

iterator([1, 2, 3, 4, 5, 6]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('I like learning JS especially in the morning');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createListWith3Li(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createListWith3Li('This is a list created by function');


// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList(text, amount) {
    document.write('<ul>');
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createList('Some text in li which created by function', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArr(arr) {
    document.write('<ul>')

    for (const item of arr) {
        switch (typeof item) {
            case 'number':
                document.write(`<li>Number ${item}</li>`);
                break;

            case 'string':
                document.write(`<li>String ${item}</li>`);
                break;

            case 'boolean':
                document.write(`<li>Boolean ${item}</li>`);
                break;

            default:
                document.write('This is not primitive');
        }
    }

    document.write('</ul>')
}

createListFromArr([1, 'some', true, 23, 'text', false, 45]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function printUsers(users) {
    for (const user of users) {
        document.write(`<div>id: ${user.id} --- name: ${user.name} --- age: ${user.age}</div>`)
    }
}

const users = [
    {id: 1, name: 'Mykyta', age: 27},
    {id: 2, name: 'Mark', age: 8},
    {id: 3, name: 'Andrew', age: 61},
    {id: 4, name: 'Alex', age: 38},
    {id: 5, name: 'Sergey', age: 25},
]

printUsers(users);


// - створити функцію яка повертає найменьше число з масиву
function getMinValue(arr) {
    let minValue = Infinity;

    for (const num of arr) {
        if (num < minValue) {
            minValue = num;
        }
    }

    return minValue;
}

console.log(getMinValue([23, -34, 45, 1, -45, 56, 3]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;

    for (const item of arr) {
        sum += item;
    }

    return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;

    return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result;
    for (const currencyValue of currencyValues) {
        if(exchangeCurrency === currencyValue.currency) {
            result = sumUAH / currencyValue.value;
        }
    }
    return result || 'Такої валюти немає';
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));