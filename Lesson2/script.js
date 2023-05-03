// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.

const book1 = {
    title: 'Harry Potter and Phisopher\'s stones',
    pageCount: 223,
    genre: 'fantasy'
}

const book2 = {
    title: 'It',
    pageCount: 1104,
    genre: 'horror'
}

const book3 = {
    title: 'The Game of Thrones',
    pageCount: 995,
    genre: 'fantasy'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

const book4 = {
    title: 'The Little Prince',
    pageCount: 112,
    genre: 'fairy tale',
    authors: [
        {
            name: ' Antoine de Saint-Exupery',
            age: 44
        },
        {
            name: 'Stephen King',
            age: 75
        },
        {
            name: 'Brandon Sanderson',
            age: 47
        }
    ]
}

const book5 = {
    title: 'Revival',
    pageCount: 756,
    genre: 'horror',
    authors: [
        {
            name: ' Antoine de Saint-Exupery',
            age: 44
        },
        {
            name: 'Stephen King',
            age: 75
        },
        {
            name: 'Brandon Sanderson',
            age: 47
        }
    ]
}

const book6 = {
    title: 'The Mistborn',
    pageCount: 543,
    genre: 'fantasy',
    authors: [
        {
            name: ' Antoine de Saint-Exupery',
            age: 44
        },
        {
            name: 'Stephen King',
            age: 75
        },
        {
            name: 'Brandon Sanderson',
            age: 47
        }
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

const users = [
    {
        name: 'Mykyta', username: 'Maverik', password: '1234'
    },
    {
        name: 'Mark', username: 'Karlson', password: 'someonewhocares'
    },
    {
        name: 'Kirk', username: 'Hammet', password: 'metallica'
    },
    {
        name: 'Larisa', username: 'Shemet', password: 'hdak12'
    },
    {
        name: 'Arkadiy', username: 'Warrior', password: 'iwillkillyou'
    },
    {
        name: 'Sein', username: 'Cartmen', password: 'southpark'
    },
    {
        name: 'Kolya', username: 'Nikolya', password: 'anelka'
    },
    {
        name: 'Seimon', username: 'guitarPlayer', password: 'iloveguitar24'
    },
    {
        name: 'Selby', username: 'shooker', password: 'eurosport247'
    },
    {
        name: 'Ronnie', username: 'rocket', password: 'trytowin'
    }
]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password,
    users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 1;
if(x !== 0){
    console.log('Вірно');
} else {
    console.log('Не вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = +prompt('Введіть число от 0 до 59');
if(time >= 0 && time <= 15){
    console.log('Перша чверть');
} else if(time > 15 && time <= 30){
    console.log('Друга чверть');
} else if(time > 30 && time <= 45){
    console.log('Третя чверть');
} else if(time > 45 && time < 60){
    console.log('Четверта чверть');
} else{
    console.log('Помилка! Введено невірне число!')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = +prompt('Введіть число від 1 до 31');
if(day > 0 && day < 11){
    console.log('Перша декада');
} else if(day >= 11 && day < 21) {
    console.log('Друга декада');
}
    else if(day >= 21 <= 31){
    console.log('Третя декада');
} else {
    console.log('Помилка! Введено неправильне число!');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const numberOfDay = +prompt('Введіть число від 1 до 7');
switch (numberOfDay) {

    case 1:
        console.log('Monday');
        break;

        case 2:
        console.log('Tuesday');
        break;

        case 3:
        console.log('Wednesday');
        break;

        case 4:
        console.log('Thursday');
        break;

        case 5:
        console.log('Friday');
        break;

        case 6:
        console.log('Saturday');
        break;

        case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Помилка! Такого дня тижня не існує!')
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.

const num1 = +prompt('Введіть будь-яке число');
const num2 = +prompt('Введіть друге число');
if(num1 > num2){
    console.log(num1);
} else if(num2 > num1){
    console.log(num2);
} else{
    console.log(`${num1} = ${num2}`);
}



// - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється false
//     (хибноподібні, тобто приводиться до false)

let y = null;
if(y === undefined || y === null || y === '' || y === 0 || y === NaN || y === false){
    y = 'default';
}

// Альтернативне рішення:

if(!y){
    y = 'default';
}





// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}