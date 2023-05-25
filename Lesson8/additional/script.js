// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User{

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street, suite, city, zipcode, geo: {lat, lng}
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName, catchPhrase, bs
        }
    }
}

const user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log(user);




// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru


class Tag {

    constructor(titleOfTag, action, ...attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

// Таким чином описати теги
// -a
const tagA = new Tag('a', 'Тег <a> визначає гіперпосилання, яке використовується для переходу з однієї сторінки на іншу',
    {titleOfAttr: 'href', actionOfAttr: 'Визначає URL сторінки, на яку йде посилання'},
        {titleOfAttr: 'rel', actionOfAttr: 'Визначає зв’язок між поточним документом і пов’язаним документом'},
        {titleOfAttr: 'target', actionOfAttr: 'Вказує, де відкрити пов’язаний документ'}
    );

console.log(tagA)


// -div
const tagDiv = new Tag('div', 'Тег <div> визначає межу або розділ у документі HTML.',
    {titleOfAttr: 'class', actionOfAttr: 'Задає одне або кілька імен класів для елемента (посилається на клас в таблиці стилів)'},
        {titleOfAttr: 'title', actionOfAttr: 'Визначає додаткові відомості про елемент' },
    {titleOfAttr: 'style', actionOfAttr: 'Визначає вбудований стиль CSS для елемента'}
    );

console.log(tagDiv);


// -h1-h6
const tagH = new Tag('h1-h6', 'Теги від <h1> до <h6> використовуються для визначення заголовків HTML.',
    {actionOffAttr: 'id', actionOfAttr: 'Визначає унікальний ідентифікатор елемента'},
    {actionOffAttr: 'hidden', actionOfAttr: 'Визначає, що елемент ще не релевантний або більше не має значення'},
    );
console.log(tagH)


// -span
const tagSpan = new Tag('span', 'Визначає розділ (рядковий) в документі',
    {titleOfAttr: 'class', actionOfAttr: 'Задає одне або кілька імен класів для елемента (посилається на клас в таблиці стилів)'},
    {actionOffAttr: 'id', actionOfAttr: 'Визначає унікальний ідентифікатор елемента'},
    );
console.log(tagSpan);


// -input
const tagInput = new Tag('input', 'Тег <input> визначає поле введення, куди користувач може вводити дані.',
    {titleOfAttr: 'checked', actionOfAttr: 'Вказує, що елемент <input> має бути попередньо вибрано під час ' +
            'завантаження сторінки (для type="checkbox" або type="radio")'},
    {titleOfAttr: 'disabled', actionOfAttr: 'Вказує, що елемент <input> має бути вимкнено'},
    {titleOfAttr: 'maxlength', actionOfAttr: 'Визначає максимальну кількість символів, дозволених у елементі <input>'}
);
console.log(tagInput);


// -form
const tagForm = new Tag('form' , 'Тег <form> використовується для створення HTML-форми для введення користувачем.',
    {titleOfAttr: 'action', actionOfAttr: 'Визначає, куди надсилати дані форми під час надсилання форми'},
    {titleOfAttr: 'method', actionOfAttr: 'Визначає метод HTTP для надсилання даних форми'},
    {titleOfAttr: 'name', actionOfAttr: 'Визначає назву форми'}
    );
console.log(tagForm);

// -option
const tagOption = new Tag('option', 'Тег <option> визначає параметр у списку вибору.',
    {titleOfAttr: 'disabled', actionOfAttr: 'Визначає, що параметр має бути вимкнено'},
    {titleOfAttr: 'label', actionOfAttr: 'Визначає коротшу мітку для опції'},
    {titleOfAttr: 'selected', actionOfAttr: 'Визначає, що під час завантаження сторінки потрібно попередньо вибрати параметр'}
    );
console.log(tagOption);

// -select
const tagSelect = new Tag('select', 'Визначає обраний список',
    {titleOfAttr: 'disabled', actionOfAttr: 'Визначає, що параметр має бути вимкнено'},
    {titleOfAttr: 'required', actionOfAttr: 'Этот логический атрибут указывает что обязательно должна быть выбрана ' +
            'опция и которая содержит не пустую строку.'},
    {titleOfAttr: 'form', actionOfAttr: 'Этот атрибут указывает к какой конкретно форме относится элемент <select> . ' +
            'Если атрибут указан, его значением должно быть ID формы в том же документе. Это позволяет размещать элементы ' +
            '<select> где угодно в документе, а не только как потомки форм.'}

    );
console.log(tagSelect);
