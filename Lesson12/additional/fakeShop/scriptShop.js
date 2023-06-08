// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const form = document.shop;
const addBtn = form.getElementsByTagName('button')[0];
const inputs = form.querySelectorAll('div > input');




const productsArr = JSON.parse(localStorage.getItem('products')) || [];

form.onsubmit = function(e) {
    e.preventDefault();

    let isFieldEmpty = false;

    for (const input of inputs) {
        if(input.value.trim() === ''){
            isFieldEmpty = true;
        }
    }

    if(isFieldEmpty){
        alert('Please, fill in all field');
        return;
    }

    if(!validateInputs()){
        return;
    }

    const prod = {};
    prod.title = form.title.value;
    prod.amount = form.amount.value;
    prod.price = form.price.value;
    prod.url = form.url.value;
    productsArr.push(prod);
    localStorage.setItem('products', JSON.stringify(productsArr));

    for (const input of inputs) {
        input.value = '';
    }

    const infoWrap = document.createElement('div');
    const info = document.createElement('p');
    info.innerText = `Ви додали ${productsArr.length} товар/ів до корзини`;
    infoWrap.appendChild(info)

    form.insertAdjacentElement('afterend', infoWrap);
}

const validateInputs = () => {
    const testTitle = /\w{2,}/.test(form.title.value);
    const testUrl = /^https?:\/\/[\w.-]+\.[a-z]{2,4}/i.test(form.url.value);

    let isValid = true;

    if(!testTitle){
        addError(form.title);
        isValid = false;
    }

    if(!testUrl){
        addError(form.url);
        isValid = false;
    }
    return isValid;
}

addError = (input) => {
    let isInputValid = false;

    input.classList.add('error');

    if (!isInputValid) {
        alert('Fill in the field correctly');
    }
}

