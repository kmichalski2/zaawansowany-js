async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return users;
}

function renderUsers(users) {
    const tbody = document.querySelector('#userList');

    users.forEach(user => {
        const row = document.createElement('tr');

        // const thId = document.createElement('th');
        // thId.innerHTML = user.id;
        // row.appendChild(thId);

        // const tdUsername = document.createElement('td');
        // tdUsername.innerHTML = user.username;
        // row.appendChild(tdUsername);

        // const tdName = document.createElement('td');
        // tdName.innerHTML = user.name;
        // row.appendChild(tdName);

        // const tdEmail = document.createElement('td');
        // tdEmail.innerHTML = user.email;
        // row.appendChild(tdEmail);

        // const tdWebsite = document.createElement('td');
        // tdWebsite.innerHTML = user.website;
        // row.appendChild(tdWebsite);

        const rowContent = `<th>${user.id}</th><td>${user.username}</td><td>${user.name}</td><td>${user.email}</td><td>${user.website}</td>`;
        row.innerHTML = rowContent;

        tbody.appendChild(row);
    });
}


async function main() {
    const users = await fetchUsers();
    console.log(users);

    renderUsers(users);
}

main();