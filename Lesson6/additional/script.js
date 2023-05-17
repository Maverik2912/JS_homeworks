// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    let i = 0;
    let step = n;

    while(i <= str.length){
        document.write(`<p>${str.slice(i, n)}</p>`);
        i += step;
        n += step;
    }
}

cutString('disaster', 3);



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

const delete_characters = (str, length) => str.slice(0, length);
console.log(delete_characters('Мені подобається програмування', 7));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = str => str.toUpperCase().split(' ').join('-');
console.log(insert_dash('HTML JavaScript PHP'));



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const capitalize = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalize('my name is Mykyta'));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// Довге рішення без регулярки
const dirtyStr = 'Harry_^&James-&*_$%^$^Potter';

const getCleanStr = str => {
    let word = '';

    for (const char of str) {
        if(isCharOrDigit(char)){
            word += char;
        } else {
            word += ' ';
        }
    }

    return word.split(' ').filter(char => char).join(' ');
}

const isCharOrDigit = char => {
    const charCode = char.charCodeAt(0);

    if((charCode > 47 && charCode < 58) ||
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)) {
        return char;
    }

}

console.log(getCleanStr(dirtyStr));

// Швидке рішення з регяляркою
const fixNames = str => str.replace(/[\W_]+/g, ' ');
console.log(fixNames(dirtyStr));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const createArrWithRandomNums = count => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }

    return arr;
}

const arrWithRandomNums = createArrWithRandomNums(10);
console.log(arrWithRandomNums);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort
const sortedNums = arrWithRandomNums.sort((a, b) => a - b);
console.log(sortedNums);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа (без 0!)
const filteredNums = arrWithRandomNums.filter(num => num !== 0 && !(num % 2) );
console.log(filteredNums);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalizeEveryWord = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizeEveryWord('мені подобається вивчати програмування'));



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не
// чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
const validator = email => {
    email = email.toLowerCase();
    const at = email.indexOf('@');
    const dot = email.indexOf('.');

    if (at > 0 && dot - at > 2 && email.length - dot > 2) {
        console.log(`Емейл ${email} валідний`);
    } else{
        console.log(`Емейл ${email} НЕ валідний`);
    }
}

validator('someeMAIL@i.ua');




// - є масивlet
const coursesArray = [
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
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

const sortedCourses = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortedCourses);



// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

const count = (str, stringSearch) => str.split('').filter(l => l === stringSearch).length;
console.log(count('Астрономия это наука о небесных объектах', 'о'));



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

const cutString2 = (str, n) => str.split(' ').slice(0, n).join(' ');
console.log(cutString2('Сила тяжести приложена к центру масс тела', 5));




// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: "To Kill a Mockingbird",
        author: ["Harper Lee"],
        pages: 336,
        genres: ["Fiction", "Classics"]
    },
    {
        title: "1984",
        author: ["George Orwell"],
        pages: 328,
        genres: ["Fiction", "Dystopian"]
    },
    {
        title: "The Great Gatsby",
        author: ["F. Scott Fitzgerald"],
        pages: 180,
        genres: ["Fiction", "Classics"]
    },
    {
        title: "Pride and Prejudice",
        author: ["Jane Austen", "E. A. Po"],
        pages: 432,
        genres: ["Fiction", "Romance", "Classics"]
    },
    {
        title: "The Catcher in the Rye",
        author: ["J.D. Salinger", "Stephen King"],
        pages: 224,
        genres: ["Fiction", "Coming-of-Age"]
    },
    {
        title: "To Kill a Kingdom",
        author: ["Alexandra Christo"],
        pages: 368,
        genres: ["Young Adult", "Fantasy"]
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: ["Yuval Noah Harari"],
        pages: 443,
        genres: ["Non-Fiction", "History"]
    },
    {
        title: "The Alchemist",
        author: ["Paulo Coelho"],
        pages: 208,
        genres: ["Fiction", "Fantasy", "Philosophy"]
    },
    {
        title: "The Hobbit",
        author: ["J.R.R. Tolkien"],
        pages: 310,
        genres: ["Fiction", "Fantasy"]
    },
    {
        title: "The Hunger Games",
        author: ["Suzanne Collins"],
        pages: 374,
        genres: ["Young Adult", "Dystopian"]
    }
];


// -знайти наібльшу книжку.
const biggestBook = books.reduce((acc, book) => acc.pages > book.pages ? acc : book);
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
const biggestAmountOfGenres = books.reduce((acc, book) => acc.genres.length > book.genres.length ? acc : book);
console.log(biggestAmountOfGenres);

// - знайти книжку/ки з найдовшою назвою
const longestTitle = books.reduce((acc, book) => acc.title.length > book.title.length ? acc : book);
console.log(longestTitle);

// - знайти книжку/ки які писали 2 автори
const twoAuthors = books.filter(book => book.author.length === 2);
console.log(twoAuthors);

// - знайти книжку/ки які писав 1 автор
const oneAuthor = books.filter(book => book.author.length === 1);
console.log(oneAuthor);

// - вісортувати книжки по кількості сторінок по зростанню
const sortedBooks = books.sort((a, b) => a.pages - b.pages);
console.log(sortedBooks);



















