// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json());

Promise.all([fetchUsers, fetchPosts, fetchComments])
    .then(result => {
        const [users, posts, comments] = result;


        for (const user of users) {

            const userPosts = [];

            for (const post of posts) {
                const commentsArr = [];

                if(user.id === post.userId) {
                   userPosts.push(post);
                }

                for (const comment of comments) {
                    if(post.userId === comment.postId) {
                        commentsArr.push(comment);
                    }
                }

                post.comments = commentsArr;
            }

            user.posts = userPosts;
        }

        showUsers(users);

    });

function showUsers(users) {
    const title = document.createElement('h1');
    const listOfUsers = document.createElement('ul');

    title.innerText = 'List of Users';

    for (const user of users) {
        const li = document.createElement('li');
        const button = document.createElement('button');

        li.innerHTML = `${user.name} <i>"${user.username}"</i>`;
        button.innerText = 'Show posts';

        button.onclick = () => showPosts(user.posts, button, user)

        li.append(button);
        listOfUsers.append(li);
    }

    document.body.append(title, listOfUsers);

}



function showPosts(posts, button, user) {

    button.classList.toggle('active');

    if(button.classList.contains('active')) {
        button.innerText = 'Hide posts';
    } else {
        button.innerText = 'Show posts';
        const postsWrap = document.querySelector('.postsWrap');
        postsWrap.remove();
        return;
    }

    const postsWrap = document.createElement('div');
    postsWrap.classList.add('postsWrap');
    document.body.append(postsWrap);

    const postsArr = [];

    for (const post of posts) {
        const postWrap = document.createElement('div');
        const blockTitle = document.createElement('h2');
        const postTitle = document.createElement('h3');
        const postBody = document.createElement('p');
        const postButton = document.createElement('button');

        postWrap.classList.add('postWrap');

        postButton.onclick = (e) => showCommentsByClick(post.comments, e.target);


        blockTitle.innerText = `Post ${post.id}`;
        postTitle.innerText = post.title;
        postBody.innerText = post.body;
        postButton.innerText = 'Show comments to post';


        postWrap.append(blockTitle, postTitle, postBody, postButton);
        postsArr.push(postWrap);

        postsWrap.replaceChildren(...postsArr);
    }

    const postsTitle = document.createElement('h2');
    postsTitle.innerHTML = `Posts of ${user.name} <i>"${user.username}"</i>`
    postsWrap.insertAdjacentElement('afterbegin', postsTitle);

}

function showCommentsByClick(comments, target) {

    target.classList.toggle('active');
    target.classList.add('showCommentsButton');

    if(target.classList.contains('active')) {
        target.innerText = 'Hide comments';
    } else {
        target.innerText = 'Show comments to post';
        const comsWrap = document.querySelector('.comsWrap');
        comsWrap.remove();
        return;
    }

    const comsWrap = document.createElement('div');
    comsWrap.classList.add('comsWrap');

    const comsArr = [];

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        const comWrap = document.createElement('div');
        comWrap.classList.add('comWrap');
        const comEmail = document.createElement('p');
        const comTitle = document.createElement('h4');
        const comBody = document.createElement('p');

        comEmail.innerHTML = `<b>Comment ${comment.id} by <i>${comment.email}</i></b>`
        comTitle.innerText = `Title: "${comment.name}"`;
        comBody.innerText = comment.body;

        comWrap.append(comEmail, comTitle, comBody);
        comsArr.push(comWrap);
    }

    comsWrap.replaceChildren(...comsArr);
    target.insertAdjacentElement('afterend', comsWrap);

    console.log(comments)
}