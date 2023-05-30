const users = [
    {status: true, name: 'Nastya', age: 24},
    {status: true, name: 'Mykyta', age: 56},
    {status: true, name: 'Andryi', age: 34},
    {status: true, name: 'Gregory', age: 75},
    {status: true, name: 'Antony', age: 12}
]

class Customer {

    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;

    }
    hello() {
        console.log(`My name is ${this.name}`);
    }
}

const customers = users.map((value, index) => new Customer(value.name, value.age, index));
console.log(customers);

const user2 = {
    name: 'vasya',
    age: 32
}

const user1 = new Customer('Mykyta', 27, 1);
user1.hello.call(user2);


const a = {}
const b = {}
console.log(a.__proto__ === b.__proto__);
console.log(a.__proto__)