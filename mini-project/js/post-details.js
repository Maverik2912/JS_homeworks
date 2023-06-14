const postUrl = new URL(location.href);
const postId = postUrl.searchParams.get('postId');
const postTitle = postUrl.searchParams.get('post-title');

const urlForFetchingPost = `https://jsonplaceholder.typicode.com/posts/${postId}`;
const urlForFetchingComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

//Знайдемо елементи, які нам будуть потрібні в майбутньому
const wrapper = document.body.getElementsByClassName('wrapper')[0];
const preloader = document.getElementById('loader-wrapper');

// Робимо запит на пост. Якщо він прийде - ми виведемо детальну інформацію про нього.
const fetchCurrentPost = async () => {

    try {
        const postResponse = await fetch(urlForFetchingPost);

        //Вимикаємо прелоадер, коли прийшов response від fetch запитів
        removePreloader(preloader);


        //Обробимо незадовільний статус відповіді від серверу
        handleWithWrongResponseStatus(postResponse);

        return postResponse.json();

    } catch (error) {
        removePreloader(preloader);
        handlingError(error, 'Post details', wrapper, '100px');
    }

}

//Робимо запит на коментарі. Покажемо їх або повідомлення про помилку.
const fetchComments = async () => {
    try {
        const commentsResponse = await fetch(urlForFetchingComments);

        //Обробимо незадовільний статус відповіді від серверу
        handleWithWrongResponseStatus(commentsResponse)

        return commentsResponse.json();

    } catch (error) {
        const commentsBlock = wrapper.getElementsByClassName('comments')[0];
        handlingError(error, 'Comments to post', commentsBlock, '40px');
    }
}

fetchCurrentPost()
    .then(post => showPostDetails(post))
    .then(() => fetchComments())
    .then(comments => showComments(comments));


const showPostDetails = post => {
    const mainTitle = wrapper.getElementsByClassName('main-title')[0];
    mainTitle.innerHTML = `<span class="subtitle">Post details:</span> <span class="current-post-title">"${postTitle}"</span>`;

    const postDetailsBlock = document.createElement('div');

    for (const prop in post) {
        const propBlock = document.createElement('div');
        propBlock.classList.add('prop-block');
        propBlock.innerHTML = `<span class="prop">${prop}:</span><span class="value">${post[prop]}</span>`;
        postDetailsBlock.appendChild(propBlock);
    }

    const postDetailsContainer = wrapper.getElementsByClassName('post-details')[0];
    postDetailsContainer.append(postDetailsBlock);
}

const showComments = comments => {
    const commentsCont = wrapper.getElementsByClassName('comments')[0];
    const commentsTitle = commentsCont.getElementsByTagName('h2')[0];
    commentsTitle.innerText = 'Comments to post';

    for (const comment of comments) {
        const commentContainer = document.createElement('div');
        const commentAuthor = document.createElement('h3')
        const commentTitle = document.createElement('h4');
        const commentBody = document.createElement('p');

        const commentText = createSingleStr(capitalize(comment.body));

        commentContainer.classList.add('comment');
        commentAuthor.classList.add('comment__author');
        commentTitle.classList.add('comment__title');
        commentBody.classList.add('comment__body');

        commentAuthor.innerHTML = `<span class="yellow">Comment by </span> ${comment.email}`
        commentTitle.innerHTML = `<span class="yellow">Title: </span>${capitalize(comment.name)}`;
        commentBody.innerHTML = `<b><span class="yellow">Text: </span> </b> ${commentText}`;

        commentContainer.append(commentAuthor, commentTitle, commentBody);
        commentsCont.append(commentContainer);
    }
}

//Форматуємо дані, які нам приходять
const capitalize = str => {
    return str[0].toUpperCase() + str.slice(1);
}

const createSingleStr = str => {
    return str.split('\n').join(' ');
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