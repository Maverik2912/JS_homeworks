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

class Attribute {

    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

// Таким чином описати теги
// -a
const tagA = new Tag('a', 'Тег <a> визначає гіперпосилання, яке використовується для переходу з однієї сторінки на іншу',
    new Attribute('href', 'Визначає URL сторінки, на яку йде посилання'),
    new Attribute('rel', 'Визначає зв’язок між поточним документом і пов’язаним документом'),
    new Attribute('target', 'Вказує, де відкрити пов’язаний документ')
    );

console.log(tagA)


// -div
const tagDiv = new Tag('div', 'Тег <div> визначає межу або розділ у документі HTML.',
    new Attribute('class', 'Задає одне або кілька імен класів для елемента (посилається на клас в таблиці стилів'),
    new Attribute('title', 'Визначає додаткові відомості про елемент'),
    new Attribute('style', 'Визначає вбудований стиль CSS для елемента')
    );
console.log(tagDiv);


// -h1-h6
const tagH = new Tag('h1-h6', 'Теги від <h1> до <h6> використовуються для визначення заголовків HTML.',
    new Attribute('id', 'Визначає унікальний ідентифікатор елемента'),
    new Attribute('hidden', 'Визначає, що елемент ще не релевантний або більше не має значенняа')
    );
console.log(tagH)


// -span
const tagSpan = new Tag('span', 'Визначає розділ (рядковий) в документі',
    new Attribute('class', 'Визначає унікальний ідентифікатор елемента'),
    new Attribute('id', 'Визначає унікальний ідентифікатор елемента')
    );
console.log(tagSpan);


// -input
const tagInput = new Tag('input', 'Тег <input> визначає поле введення, куди користувач може вводити дані.',
    new Attribute('checked', 'Визначає унікальний ідентифікатор елемента'),
    new Attribute('disabled', 'Вказує, що елемент <input> має бути попередньо вибрано під час ' +
        'завантаження сторінки (для type="checkbox" або type="radio")'),
    new Attribute('maxlength', 'Визначає максимальну кількість символів, дозволених у елементі <input>')
);
console.log(tagInput);


// -form
const tagForm = new Tag('form' , 'Тег <form> використовується для створення HTML-форми для введення користувачем.',
    new Attribute('action', 'Визначає, куди надсилати дані форми під час надсилання формиа'),
    new Attribute('method', 'Визначає метод HTTP для надсилання даних форми'),
    new Attribute('name', 'Визначає назву форми')
    );
console.log(tagForm);

// -option
const tagOption = new Tag('option', 'Тег <option> визначає параметр у списку вибору.',
    new Attribute('disabled', 'Визначає, що параметр має бути вимкнено'),
    new Attribute('label', 'Визначає коротшу мітку для опції'),
    new Attribute('selected', 'Визначає, що під час завантаження сторінки потрібно попередньо вибрати параметр')
    );
console.log(tagOption);

// -select
const tagSelect = new Tag('select', 'Визначає обраний список',
    new Attribute('disabled', 'Визначає, що параметр має бути вимкнено'),
    new Attribute('required', 'Этот логический атрибут указывает что обязательно должна быть выбрана ' +
        'опция и которая содержит не пустую строку.'),
    new Attribute('form', 'Этот атрибут указывает к какой конкретно форме относится элемент <select> . ' +
        'Если атрибут указан, его значением должно быть ID формы в том же документе. Это позволяет размещать элементы ' +
        '<select> где угодно в документе, а не только как потомки форм.')
    );
console.log(tagSelect);


// Реалізувати можливість транзакцій
class userAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let i = this.cards.length + 1;
        if(i > 3){
            console.error('Не можна мати більше 3 карток');
        } else{
            let newCard = userCard(i);
            this.cards.push(newCard);
            return newCard;
        }
    }

    getCardByKey(key) {
        return this.cards.find(card => card.getCardInfo().key === key);
    }
}

function userCard(key) {

    const card = {
        balance: 100,
        transactionLimit: 100,
        transactionHistory: [],
        key: key
    }

    function makeHistoryNote(operationType, credits){
        const history = {operationType, credits, operationTime: new Date().toLocaleString()}
        card.transactionHistory.push(history);
    }
    return {
        getCardInfo() {
            return card;
        },

        putCredits(credits) {
            card.balance += credits;
            makeHistoryNote('Received credits', credits)
        },

        takeCredits(credits) {
            if(credits > card.transactionLimit) {
                console.error('Ви перевищили ліміт транзакцій');
            } else if(credits > card.balance) {
                console.error('Недостатньо коштів');
            } else {
                card.balance -= credits;
                makeHistoryNote('Withdrawal of credits', credits)
            }
        },

        setTransactionsLimit(limit) {
            card.transactionLimit = limit;
            makeHistoryNote('Transaction limit change', limit);
        },

        transferCredits(credits, recipient) {
            this.takeCredits(credits * 1.05);
            recipient.putCredits(credits);
        }
    }
}

const user1 = new userAccount('Bob');
user1.addCard();
user1.addCard();

const card1 = user1.getCardByKey(1);
const card2 = user1.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionsLimit(1000);
card1.transferCredits(400, card2);

console.log(card1.getCardInfo());
console.log(card2.getCardInfo());
