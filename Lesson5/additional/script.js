// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const findMinValue = (a, b, c) => {
    const arr = [a, b, c];
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }

    return minValue;
}

console.log(findMinValue(3,4,2));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const findMaxValue = (a, b, c) => {
    const arr = [a, b, c];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue){
            maxValue = arr[i];
        }
    }

    return maxValue;
}

console.log(findMaxValue(1, 0, -1));


// - створити функцію яка повертає найбільше число з масиву
const findMaxValueInArr = arr => {
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue){
            maxValue = arr[i];
        }
    }

    return maxValue;
}

console.log(findMaxValueInArr([1, 2, 56, 34, -12]));


//- створити функцію яка повертає найменьше число з масиву
const findMinValueInArr = arr => {
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }

    return minValue;
}

console.log(findMinValueInArr([1, 2, 3, -34, 45]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sum = arr => {
    let res = 0;

    for (const item of arr) {
        res += item;
    }

    return res;
}

console.log(sum([1, 2, 3, 4, 5, 6]));


// - Дано натуральное число n. Выведите все числа от 1 до n.
const iterator = n => {
    if(n <= 0) return;

    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}

iterator(5);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в
// порядке убывания в противном случае.

const funcIter = (a, b) => {
    if(a < b) {

        for (let i = a; i <= b ; i++) {
            console.log(i);
        }

    } else if(a > b){

        for (let i = a; i >= b ; i--) {
            console.log(i);
        }

    } else{
        console.log(a);
    }
}

funcIter(1, 5);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
const swap = (arr, i) => {
    if(i >= arr.length - 1) return `Індекс завеликий, вертаю ісходний масив ${arr}`;

    let a = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = a;

    return arr;
}

console.log(swap([8, 0, 4, 2], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
const recursSwap = arr => {
    const resArr = [];
    let countNull = 0;

    for (const elem of arr) {
        if(elem === 0){
            countNull++;
        } else{
            resArr[resArr.length] = elem;
        }
    }

    for (let i = 0; i < countNull; i++) {
        resArr[resArr.length] = 0;
    }

    return resArr;
}

console.log(recursSwap([1, 0, 0, 6]));