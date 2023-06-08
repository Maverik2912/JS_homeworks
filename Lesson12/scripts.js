// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
const fetchUsers = fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

function showUsersList() {
    fetchUsers
        .then(users => {
            const listOfUsers = document.createElement('ul');

            for (const user of users) {
                const li = document.createElement('li');
                const a = document.createElement('a');

                a.innerHTML = `${user.id}. Show details of <b>${user.name}<b/>`
                a.href = `user-details.html?id=${user.id}`

                li.appendChild(a);
                listOfUsers.appendChild(li);
                document.body.appendChild(listOfUsers);
            }
        })
}

showUsersList();