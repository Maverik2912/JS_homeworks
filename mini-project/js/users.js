const url = 'https://jsonplaceholder.typicode.com/users';
const preloader = document.getElementById('loader-wrapper');

fetch(url)
    .then(response => {
        // Ховаємо прелоадер після того, як прийшла відповідь fetch
        removePreloader(preloader);

        //Обробляємо, якщо статус відповіді від сервера не 200
        handleWithWrongResponseStatus(response);

        return response.json();
    }).then(users => {

    //Викликаємо функцію, в якій будуємо сторінку, щоб показати юзерів
    showUsers(users);
})
    .catch(error => {
            removePreloader(preloader);
            handlingError(error, 'List of users', document.body, '100px');
        });


const showUsers = users => {
    const allUsersWrap = document.body.getElementsByClassName('users-wrap')[0];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const userContainer = document.createElement('div');
        const userBlock = document.createElement('p');
        const hrefBtn = document.createElement('a');

        userContainer.classList.add('user-container')
        userBlock.classList.add('user');
        hrefBtn.classList.add('href-btn');

        userBlock.innerHTML = `${user.id}. <b>${user.name}</b>`;
        hrefBtn.innerText = 'Details';
        hrefBtn.href = `user-details.html?id=${user.id}`;

        // Для останньої колонки юзерів приберемо border та padding знизу, додавши клас
        if(i > users.length - 3) {
            userContainer.classList.add('last-two-users');
        }

        userContainer.append(userBlock, hrefBtn);
        allUsersWrap.appendChild(userContainer);

    }
}

const handlingError = (error, title, elementForAppend, marginTop) => {

    // Замість данних виводимо повідомлення про помилку
    const errorMsgContainer = document.createElement('div');
    const pageTitle = document.createElement('h1');
    const errorImg = document.createElement('img');

    pageTitle.classList.add('main-title', 'title-mb');
    pageTitle.innerText = title;

    errorImg.src = '../images/error.png';
    errorImg.alt = 'Error';
    errorImg.classList.add('error-img');
    errorImg.style.marginTop = marginTop;

    errorMsgContainer.classList.add('error-message');
    errorMsgContainer.innerHTML = `Oooops... There is something wrong. <br>${error.message}. <br> Please try again later.`;
    errorMsgContainer.insertAdjacentElement('afterbegin', errorImg);
    elementForAppend.replaceChildren(pageTitle, errorMsgContainer);

    throw error;
}

const removePreloader = (preloader) => {
    preloader.style.display = 'none';
}

const handleWithWrongResponseStatus = (response) => {
    if(response.status !== 200) {
        throw new Error(`The server responded with a status of ${response.status}`);
    }
}