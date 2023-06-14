const currentUrl = new URL(location.href);
const userId = currentUrl.searchParams.get('id');

const currentUserUrl = `https://jsonplaceholder.typicode.com/users/${userId}/`;
const postsUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;


const wrapper = document.body.getElementsByClassName('wrapper')[0];
const preloader = document.getElementById('loader-wrapper');

// Спочатку робимо запит на інформацію про юзера. Виведемо її, якщо від сервера прийде відповідь
const fetchingUserDetails = async () => {

    try {
        const userResponse = await fetch(currentUserUrl);

        //Вимикаємо прелоадер, коли прийшов response від fetch запитів
        removePreloader(preloader);

        // Обробляємо помилку, якщо статус відповіді від сервера не 200
            handleWithWrongResponseStatus(userResponse);

        return userResponse.json();


    } catch (error) {
        removePreloader(preloader);
        handlingError(error, 'User details', wrapper, '100px');
    }

}

// Робимо запит на пости. Якщо все добре, виведемо їх, якщо ні -- покажемо в попапі інформацію про помилку
const fetchingPosts = async (username) => {

    try {
        // Робимо запит на пости
        const postsResponse = await fetch(postsUrl);

        // Обробляємо помилку, якщо статус відповіді від сервера не 200
        handleWithWrongResponseStatus(postsResponse);


        // Якщо данні про пости прийдуть, виведемо їх
        const posts = await postsResponse.json();
        return {posts, username}

    } catch (error) {
        return {error, username};
    }

}

fetchingUserDetails()
    .then(user => {
        //Будуємо сторінку
        createUserDetailsPage(user);
        return user;
    })
    .then((user) => fetchingPosts(user.name))
    .then(result => {

        const postsBtn = wrapper.getElementsByClassName('posts-btn')[0];

        // По кліку на кнопку відкриваємо попап і заповнюємо його постами або інформацією про помилку
        if(result.error) {
            postsBtn.onclick = () => openPopup(result.error.message, result.username)
        } else {
            postsBtn.onclick = () => openPopup(result.posts, result.username)
        }
    })



const createUserDetailsPage = user => {
    const infoWrapper = wrapper.getElementsByClassName('info-wrapper')[0];
    const leftSide = wrapper.getElementsByClassName('left-side')[0];
    const rightSide = wrapper.getElementsByClassName('right-side')[0];
    const mainTitle = wrapper.getElementsByClassName('main-title')[0];

    mainTitle.innerText = `${user.name}`;

    //Викликаємо рекурсивну ф-цію, яка дістане нам всі поля об'єкта
    const props = showUserDetails(user);

    // Вирахуємо, як саме повінні росподілятися характеристики юзера залежно від їх кількості
    props.reduce((acc, prop, index) => {
        if (props.length === 1) {
            leftSide.appendChild(prop);
        } else if (props.length % 2 === 0) {
            index < props.length / 2 ? leftSide.appendChild(prop) : rightSide.appendChild(prop);
        } else {
            index <= Math.floor(props.length / 2) ? leftSide.appendChild(prop) : rightSide.appendChild(prop);
        }
    }, null);

    infoWrapper.append(leftSide, rightSide);

    // Додамо кнопку, яка буде відкривати попап зі списком постів
    const btnContainer = wrapper.getElementsByClassName('btn-wrapper')[0];
    const btnOpenPopup = document.createElement('button');
    btnOpenPopup.innerText = 'Posts of current user';
    btnOpenPopup.classList.add('posts-btn');
    btnContainer.appendChild(btnOpenPopup);
}

const showUserDetails = user => {
        const props = [];

       const handler = user => {

           for (const prop in user) {
               if(typeof user[prop] === 'object'){
                   handler(user[prop]);
               } else {
                   const propBlock = document.createElement('div');
                   const propSpan = document.createElement('span');
                   const valueSpan = document.createElement('span');

                   propBlock.classList.add('prop-block');
                   propSpan.classList.add('prop');
                   valueSpan.classList.add('value');

                   propSpan.innerText = `${prop}: `
                   valueSpan.innerText = `${user[prop]}`;

                   propBlock.append(propSpan, valueSpan);
                   props.push(propBlock);
               }
           }
       }
       handler(user);

       return props;
    }


const popup = wrapper.getElementsByClassName('popup')[0];
const popupContent = popup.getElementsByClassName('popup__content')[0];

const openPopup = (posts, username) => {
    const popupTitle = popupContent.getElementsByClassName('popup__title')[0];
    popupTitle.innerText = `${username}'s posts`

    //Передбачимо момент, якщо на сторінці буде скролл, а при появі попапу він пропаде і сторінка почне стрибати. Додамо
    // body padding, а також заборонимо скролити
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;

    document.body.classList.add('body-not-scroll');
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    popup.classList.add('active');

    //Перевіряємо: якщо прийшла стрінга, значить сталася помилка. В такому випадку заповнюємо попап інфою про помилку
    if(typeof posts === 'string') {
        fillPopupWithError(posts);
        return;
    }

    fillPopup(posts, username);
}

const fillPopup = (posts) => {
    const postsBlock = popupContent.getElementsByClassName('posts')[0];
    postsBlock.innerText = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let postTitle = post.title;
        postTitle = postTitle[0].toUpperCase() + postTitle.slice(1);

        const postBlock = document.createElement('div');
        const postText = document.createElement('p');
        const hrefMoreAboutPost = document.createElement('a');

        postBlock.classList.add('post-body');
        postText.classList.add('post-text');

        hrefMoreAboutPost.classList.add('about-post-btn');

        postText.innerHTML = `${i + 1}. <b class="post-title">${postTitle}</b>`;
        hrefMoreAboutPost.innerText = 'More...';
        hrefMoreAboutPost.href = `post-details.html?post-title=${postTitle}&postId=${post.id}`

        postBlock.append(postText, hrefMoreAboutPost);
        postsBlock.appendChild(postBlock);
    }


}

const closePopup = () => {
    const closeItem = popup.getElementsByClassName('popup__close')[0];

    //Закриваємо попап по натисканню esc
    window.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
            removePopup();
            const postsBtn = document.body.getElementsByClassName('posts-btn')[0];
            postsBtn.blur();
        }
    })

    //Закриваємо попап по кліку на крестик
    closeItem.addEventListener('click', () => removePopup());

    //Закриваємо попап по кліку не на контенту частину попапу
    popup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup__content')) {
            removePopup();
        }
    });

    //ф-ція, яка закриває попап
    const removePopup = () => {
        popup.classList.remove('active');
        document.body.classList.remove('body-not-scroll');
        document.body.style.paddingRight = '0';
    }

}

closePopup();

const fillPopupWithError = (error) => {

    const posts = popupContent.getElementsByClassName('posts')[0];
    const errorMsg = document.createElement('div');
    const errorImg = document.createElement('img');

    errorImg.src = '../images/error.png';
    errorImg.alt = 'Error';
    errorImg.style.width = '100px';
    errorImg.style.marginBlock = '30px';
    errorImg.classList.add('error-img');

    errorMsg.classList.add('error-message');
    errorMsg.innerText = `Oooops... There is something wrong with downloading posts of user. ${error}. Please try again later.`;
    errorMsg.style.fontSize = '24px'

    posts.replaceChildren(errorImg, errorMsg);
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

const handleWithWrongResponseStatus = (response) => {
    if(response.status !== 200) {
        throw new Error(`The server responded with a status of ${response.status}`);
    }
}

const removePreloader = (preloader) => {
    preloader.style.display = 'none';
}






