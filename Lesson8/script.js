// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}




const users = [
    new User(Math.floor(Math.random() * 10e+6), 'Mykyta', 'Kraskovskyi', 'nikitakraskovskyi@gmail.com', '0678960708'),
    new User(Math.floor(Math.random() * 10e+6), 'Alex', 'Smith', 'smith@gmail.com', '06789657568'),
    new User(Math.floor(Math.random() * 10e+6), 'Svetlana', 'Ivanova', 'svet_ivan@gmail.com', '06745455608'),
    new User(Math.floor(Math.random() * 10e+6), 'Andrew', 'Larson', 'and_lar@gmail.com', '02343208'),
    new User(Math.floor(Math.random() * 10e+6), 'Carlos', 'Carlsen', 'carlsen@gmail.com', '045654708'),
    new User(Math.floor(Math.random() * 10e+6), 'Borys', 'Duda', 'bor_duda@gmail.com', '064564568'),
    new User(Math.floor(Math.random() * 10e+6), 'Ivan', 'Giri', 'ivan_giri@gmail.com', '066786708'),
    new User(Math.floor(Math.random() * 10e+6), 'Anastasia', 'Kasparova', 'anas_kasparova@gmail.com', '064560708'),
    new User(Math.floor(Math.random() * 10e+6), 'Morgan', 'Aronian', 'morgan_aronian@gmail.com', '0465465468'),
    new User(Math.floor(Math.random() * 10e+6), 'Lola', 'Karmen', 'lola_karmen@gmail.com', '04565465488')
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const evenId = users.filter(user => !(user.id % 2));
console.log(evenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(Math.floor(Math.random() * 10e+6), 'vasya', 'pupkin', 'vasya@gmail.com', '0678564534', ['mouse', 'keyboard']),
    new Client(Math.floor(Math.random() * 10e+6), 'petya', 'koval', 'koval@gmail.com', '065689534', ['PC', 'laptop']),
    new Client(Math.floor(Math.random() * 10e+6), 'sashaa', 'loman', 'loman@gmail.com', '0565664534', ['mouse', 'keyboard', 'laptop']),
    new Client(Math.floor(Math.random() * 10e+6), 'larysa', 'bondar', 'bondar@gmail.com', '0767564534', ['cheese']),
    new Client(Math.floor(Math.random() * 10e+6), 'arkadiy', 'karpov', 'karpov@gmail.com', '06456454', ['sausage', 'potato', 'tomato', 'bread']),
    new Client(Math.floor(Math.random() * 10e+6), 'mykyta', 'lastochkin', 'lastocka@gmail.com', '09623464534', ['cheese']),
    new Client(Math.floor(Math.random() * 10e+6), 'sergey', 'lostin', 'lostin@gmail.com', '09634564534', ['apples', 'oranges', 'bananas']),
    new Client(Math.floor(Math.random() * 10e+6), 'anton', 'artenov', 'artenov@gmail.com', '04854894598', ['bread']),
    new Client(Math.floor(Math.random() * 10e+6), 'borys', 'lolitonov', 'lolitonov@gmail.com', '045685659854', ['mouse', 'keyboard', 'laptop', 'PC']),
    new Client(Math.floor(Math.random() * 10e+6), 'svytoslav', 'sidorov', 'sidorov@gmail.com', '04568948984', ['mouse'])
]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
function Car(model, manufacturer, yearManufacture, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearManufacture = yearManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
}

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key)){
            console.log(`${key} - ${this[key]}`);
        }
    }
}

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed = Math.max(this.maxSpeed, newSpeed);
}

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function(newValue) {
    this.yearManufacture = newValue;
}

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function(driver) {
    this.driver = driver;
}



// (Те саме, тільки через клас)
class SuperCar {

    constructor(model, manufacturer, yearManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacture = yearManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
}


// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
SuperCar.prototype.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
}

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
SuperCar.prototype.info = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key)){
            console.log(`${key} - ${this[key]}`);
        }
    }
}

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
SuperCar.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed = Math.max(this.maxSpeed, newSpeed);
}

// -- changeYear (newValue) - змінює рік випуску на значення newValue
SuperCar.prototype.changeYear = function(newValue) {
    this.yearManufacture = newValue;
}

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
SuperCar.prototype.addDriver = function(driver) {
    this.driver = driver;
}


// /-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('girl1', 27, 35),
    new Cinderella('girl2', 28, 36),
    new Cinderella('girl3', 29, 37),
    new Cinderella('girl4', 30, 38),
    new Cinderella('girl5', 31, 39),
    new Cinderella('girl6', 32, 40),
    new Cinderella('girl7', 33, 41),
    new Cinderella('girl8', 34, 42),
    new Cinderella('girl9', 35, 43),
    new Cinderella('girl10', 36, 44)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {

    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Kristian', 27, 37);


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if(cinderella.footSize !== prince.shoeSize) continue;
    console.log(cinderella);
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const match = cinderellas.find(girl => girl.footSize === prince.shoeSize);
console.log(match);