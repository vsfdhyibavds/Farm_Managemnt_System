// Initialize users array from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

function showAddUserForm() {
    document.getElementById('add-user-form').style.display = 'block';
}

function hideAddUserForm() {
    document.getElementById('add-user-form').style.display = 'none';
}

function addUser(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    

    // Create a new user object
    const newUser = {
        id: users.length + 1,
        username,
        role,
        email
    };

    // Add new user to the users array and save it in local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Refresh the users table
    populateUsersTable();

    // Hide the form and reset fields
    hideAddUserForm();
    document.getElementById('user-form').reset();
}

function populateUsersTable() {
    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = ''; // Clear the table

    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.role}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteUser(id) {
    // Remove user from array and update local storage
    users = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));

    // Refresh the table
    populateUsersTable();
}

// Load users when the page is loaded
document.addEventListener('DOMContentLoaded', populateUsersTable);
