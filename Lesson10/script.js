// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form1 = document.form1;

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {};
    const inputs = this.querySelectorAll('div > input');
    for (const input of inputs) {
        data[input.name] = input.value;
    }

    const dataContainer = document.createElement('div');
    for (const key in data) {
        dataContainer.innerHTML += `<p>${key}: ${data[key]}</p>`
    }

    form1.insertAdjacentElement('afterend', dataContainer);
});

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
const counterOfReload = document.body.getElementsByClassName('finite')[0];
counterOfReload.innerText = localStorage.getItem('counter') || counterOfReload.innerText
window.onbeforeunload = function () {
    let nextValue = +counterOfReload.innerText + 1;
    localStorage.setItem('counter', nextValue.toString());
}

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію
window.onload = function() {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(new Date().toLocaleString())
    localStorage.setItem('sessions', JSON.stringify(sessions))
}



// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const arr = [...new Array(100).keys()];
const numsUl = document.createElement('ul');
document.body.appendChild(numsUl);

let referencePoint = 0;
function showTenElements() {
    numsUl.innerText = '';
    for (let i = referencePoint; i < referencePoint + 10; i++) {
        numsUl.innerHTML += `<li>${arr[i]}</li>`
    }
}

showTenElements();

const prevButton = document.createElement('button')
const nextButton = document.createElement('button')

prevButton.innerText = 'Previous';
nextButton.innerText = 'Next';

document.body.append(prevButton, nextButton);

nextButton.addEventListener('click', function() {
    if(referencePoint + 10 >= arr.length) return;

    referencePoint += 10;
    showTenElements();
});

prevButton.addEventListener('click', function() {
    if(referencePoint - 10 < 0) return;

    referencePoint -= 10;
    showTenElements();
})


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

const someElement = document.createElement('div');
const hideButton = document.createElement('button');
hideButton.classList.add('hideButton')
hideButton.innerText = 'Hide';
someElement.classList.add('hideElement');
document.body.append(someElement, hideButton);
someElement.id = 'text';

hideButton.addEventListener('click', function() {
    someElement.style.display = 'none';
})


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const form2 = document.form2;
const messageCont = document.createElement('div');
form2.insertAdjacentElement('beforeend', messageCont);
form2.addEventListener('submit', function(e) {
    e.preventDefault();
    const ageValue = +form2.age.value;

    function showMessage(msg) {
        messageCont.innerText = '';
        messageCont.innerText = msg;
        form2.age.value = '';
    }
    if(ageValue >= 18) {
        showMessage('Вам більше 18 років. Ось вам adult контент')
    } else if(ageValue < 18 && ageValue > 0) {
        showMessage('Ви маленький. Йдіть дивитися мультики')
    } else {
        showMessage('Сталася помилка. Введіть вік.');
    }

})

//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const form3 = document.form3;
const tableContainer = document.createElement('div');
form3.insertAdjacentElement('beforeend', tableContainer);

form3.addEventListener('submit', function(e) {
    e.preventDefault();
    const trCount = +form3.td.value;
    const tdCount = +form3.tr.value;
    const valueOfTd = form3.value.value;

    const table = document.createElement('table');
    table.classList.add('table')
    for (let i = 0; i < trCount; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < tdCount; j++) {
            const td = document.createElement('td');
            td.innerText = valueOfTd;
            tr.appendChild(td);
        }
    }
    tableContainer.appendChild(table);
})


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceElement = document.body.getElementsByClassName('price')[0];

let price = localStorage.getItem('price') || 100;
let time = localStorage.getItem('time');

const now = new Date().getTime();

const block = document.getElementsByClassName('price-block')[0];

if(time && now - time > 10e3){
    price = +price + 10;
    localStorage.setItem('price', price.toString());
}

priceElement.innerText = price + 'grn';
localStorage.setItem('time', now.toString());
