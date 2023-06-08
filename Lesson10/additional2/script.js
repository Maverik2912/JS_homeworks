// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const curseWords = ['блядь', 'нахуй', 'пізда','сука','єбать'];

const form1 = document.form1;

form1.addEventListener('submit', function(e) {
    e.preventDefault();
    let isCurse = false;
    const inputWords = form1.message.value.toLowerCase().split(' ');

    for (const inputWord of inputWords) {
        if(curseWords.includes(inputWord.trim())) {
            isCurse = true;
            break;
        }
    }

    if(isCurse){
        alert('Такі слова писати не можна');
    } else {
        alert('Все ок');
    }
});

// - Создайте меню, которое раскрывается/сворачивается при клике
const title = document.getElementsByClassName('title')[0];
const menu = document.getElementsByClassName('menu__body')[0];
title.addEventListener('click', function () {
    menu.classList.toggle('active');
});


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [
    { title: 'Comment 1', body: 'Lorem ipsum dolor sit amet.' },
    { title: 'Comment 2', body: 'Consectetur adipiscing elit.' },
    { title: 'Comment 3', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Comment 4', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Comment 5', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Comment 6', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Comment 7', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Comment 8', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Comment 9', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Comment 10', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
];

for (const comment of comments) {
    const wrap = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('p');
    const button = document.createElement('button');

    title.innerText = comment.title;
    text.innerText = comment.body;
    button.innerText = 'Roll up';


    wrap.classList.add('wrap');

    button.addEventListener('click', function() {
        text.classList.toggle('hiddenComment');

        if(text.classList.contains('hiddenComment')) {
            button.innerText = 'Expand'
        } else {
            button.innerText = 'Roll up';
        }

    });

    wrap.append(title, text, button);
    document.body.appendChild(wrap);
}



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const hideYourselfBtn = document.createElement('button');
hideYourselfBtn.style.display = 'block'
hideYourselfBtn.style.marginBottom = '30px';
hideYourselfBtn.innerText = 'Hide yourself';
document.body.appendChild(hideYourselfBtn);

hideYourselfBtn.addEventListener('click', function() {
    this.style.display = 'none';
});

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.addEventListener('click', function(e) {
//     const info = {};
//     const target = e.target;
//
//     info.title = target.tagName.toLowerCase();
//     info.classList = Array.from(target.classList);
//     info.id = target.id;
//     info.size = {height: target.offsetHeight, width: target.offsetWidth};
//
//     console.log(info);
// });

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.body.addEventListener('click', function(e) {
//     const target = e.target;
//     const mask = document.createElement('div');
//     mask.classList.add('mask');
//     document.body.append(mask);
//
//     mask.addEventListener('click', function(e) {
//         e.stopPropagation();
//         this.style.display = 'none';
//     });
//
//     const info = document.createElement('div');
//     info.classList.add('infoField');
//
//     info.innerHTML = `
//     <h2>Назва тегу: ${target.tagName.toLowerCase()}</h2>
//     <p>Список классів: ${Array.from(target.classList).join(',')}</p>
//     <p>Список id: ${target.id}</p>
//     <p>Ширина: ${target.offsetWidth}, висота: ${target.offsetHeight}</p>
//     `
//     mask.appendChild(info);
// })

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const checkboxStatus = document.getElementById('status');
const checkboxAge = document.getElementById('age');
const checkboxCity = document.getElementById('city');


const wrap = document.createElement('div');
document.form2.insertAdjacentElement('afterend', wrap);

function filterUsers(users) {
    for (const user of users) {
        const container = document.createElement('div');
        wrap.append(container);

        container.innerHTML = `
            <span>name: ${user.name}</span>
            <span>age: ${user.age}</span>
            <span>status: ${user.status}</span>
            <p>address:</p>
            <span>city: ${user.address.city}</span>
            <span>street: ${user.address.street}</span>
            <span>number: ${user.address.number}</span>
            <hr>
            <br>
        `
    }

}

filterUsers(usersWithAddress);

function applyFilter() {
    const statusChecked = checkboxStatus.checked;
    const ageChecked = checkboxAge.checked;
    const cityChecked = checkboxCity.checked;

    wrap.innerText = '';

    const filteredUsers = usersWithAddress.filter(user => {
        if(statusChecked && user.status){
            return false;
        }
        if(ageChecked && user.age < 29) {
            return false;
        }
        if(cityChecked && user.address.city !== 'Kyiv') {
            return false;
        }
        return true;
    });

    filterUsers(filteredUsers);
}

checkboxStatus.addEventListener('change', applyFilter);
checkboxAge.addEventListener('change', applyFilter);
checkboxCity.addEventListener('change', applyFilter);



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


function explorer(htmlElement) {
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.innerText = 'Prev';
    nextBtn.innerText = 'Next';
    document.body.append(prevBtn, nextBtn);

   let currentElement = htmlElement;

   nextBtn.addEventListener('click', function() {
       getNextElement(currentElement);
       console.log(currentElement);
   });

    prevBtn.addEventListener('click', function() {
        getPrevElement(currentElement);
        console.log(currentElement);
    });

    function getNextElement(element) {
        if(element.firstElementChild) {
            currentElement = element.firstElementChild;
        } else if(element.nextElementSibling) {
            currentElement = element.nextElementSibling;
        } else {
            let parent = element.parentElement;
            while(parent && !parent.nextElementSibling) {
                parent = parent.parentElement;
            }
            currentElement = parent ? parent.nextElementSibling : null;
        }
    }

    function getPrevElement(element) {
        let prevElem = element.previousElementSibling;
        if(prevElem) {
            while(prevElem.lastElementChild) {
                prevElem = prevElem.lastElementChild;
            }
            currentElement = prevElem;
        } else {
            currentElement = element.parentElement ? element.parentElement : null;
        }
    }
}

explorer(document.body);





// При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.addEventListener('mouseup', function(e) {
    // const selectedText = window.getSelection().toString();
    // const target = e.target;
    // const start = target.innerText.indexOf(selectedText);
    // const length = selectedText.length;
    //
    // const slice = target.innerText.slice(start, start + length);
    // const before = target.innerText.slice(0, start);
    // const after = target.innerText.slice(start + length);
    //
    // if (selectedText) {
    //     target.innerHTML = `${before}<b>${slice}</b>${after}`
    // }

});



