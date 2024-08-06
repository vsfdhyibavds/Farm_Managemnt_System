fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(users => {
        const usersTableBody = document.getElementById('usersTableBody');
        usersTableBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td>${user.email}</td>
                <td>
                    <button class="actions-button" onclick="editUser(${user.id})">Edit</button>
                    <button class="actions-button" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;
            usersTableBody.appendChild(row);
        });
    });
