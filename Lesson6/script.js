// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const str = ' dirty string   ';
const clearStr = str.split(' ').filter(value => value).join(' ');
console.log(clearStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     const str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const str2 = 'Ревуть воли як ясла повні';
const stringToArray = str => str.split(' ');
console.log(stringToArray(str2));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// Варіант 1
console.log(nums.map(value => value += ''));
// Варіант 2
console.log(nums.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.

const sortNums = (nums, direction) => {
    let result;

    if (direction === `ascending`) {
        result = nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        result = nums.sort((a, b) => b - a);
    } else {
        result = 'Введіть коректний напрям сортування'
    }

    return result;
}

console.log(sortNums(nums, 'descending'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortByMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sortByMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));

let id = 1;
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const addIdField = coursesAndDurationArray.map(course => course = {...course, id: id++});
console.log(addIdField);


// описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'J',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Q',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'K',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'A',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'J',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'Q',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'K',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'A',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'J',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Q',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'K',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'A',
        color: 'red'
    },
    {
        cardSuit: 'club',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: 'J',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: 'Q',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: 'K',
        color: 'black'
    },
    {
        cardSuit: 'club',
        value: 'A',
        color: 'black'
    }
]

// - знайти піковий туз
const aceOfSpades = cards.filter(card => card.value === 'A' && card.cardSuit === 'spade');
console.log(aceOfSpades);

// - всі шістки
const sixth = cards.filter(card => card.value === '6');
console.log(sixth);

// - всі червоні карти
const redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

// - всі буби
const diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше
const clubsFrom9 = cards.filter(
    card => card.cardSuit === 'club' && ['9', '10', 'J', 'Q', 'K', 'A'].includes(card.value))
console.log(clubsFrom9);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const suits = cards.reduce((acc, card) => {
    switch(card.cardSuit){
        case 'spade':
        acc.spades.push(card);
        break;

         case 'club':
        acc.clubs.push(card);
        break;

         case 'diamond':
        acc.diamonds.push(card);
        break;

         case 'heart':
        acc.hearts.push(card);
        break;
    }

    return acc;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(suits);


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є docker
const includesDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(includesDocker);

// --написати пошук всіх об'єктів, в яких в modules є sass
const includesSASS = coursesArray.filter(course => course.modules.includes('sass'));
console.log(includesSASS);
