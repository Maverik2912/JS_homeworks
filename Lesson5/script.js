// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectArea = (a, b) => a * b;
console.log(rectArea(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleArea = r => Math.PI * r ** 2;
console.log(circleArea(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);
console.log(cylinderArea(15, 6));


// - створити функцію яка приймає масив та виводить кожен його елемент
const iterator = arr => {
    for (const item of arr) {
        console.log(item);
    }
}

iterator([1, 2, 3, 4, 5]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createP = text => {
    document.write(`<p>${text}</p>`);
}

createP('Some text in paragraph');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createUlWith3Li = text => {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}

createUlWith3Li('Some text in li');


// - створити функцію яка створює ul. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createUl = (text, count) => {

    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}

createUl('Some text in li with count', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createUlFromArray = arr => {

    document.write('<ul>')
    for (const elem of arr) {
    document.write(`<li>${elem}</li>`)
    }
    document.write('</ul>');

}

createUlFromArray([1,2,true, false, 'some', 'text']);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const obj = [
    {id: 1, name: 'Nastya', age: 24},
    {id: 2, name: 'Mykyta', age: 56},
    {id: 3, name: 'Andryi', age: 34},
    {id: 4, name: 'Gregory', age: 75},
    {id: 5, name: 'Antony', age: 12}
]

const printer = arr => {
    for (const user of arr) {
        document.write(`<div>id: ${user.id} name: ${user.name} age: ${user.age}</div>`)
    }
}

printer(obj);


// - створити функцію яка повертає найменьше число з масиву
const findMinValue = arr => {
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }

    return minValue;
}

console.log(findMinValue([1, 2, -3, -6, 5]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = arr => {
    let res = 0;

    for (const item of arr) {
        res += item;
    }

    return res;
}

console.log(sum([1, 2, 3, 4, 5, 6]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {

    for (const currencyValue of currencyValues) {
        if(exchangeCurrency === currencyValue.currency){
           return sumUAH / currencyValue.value;
        }
    }

    return 'Такої валюти немає';
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

