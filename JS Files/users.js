// Sample initial user data
let users = [
    { id: 1, username: 'Eugene', role: 'Manager', email: 'eugenco578@gmail.com' },
    { id: 2, username: 'Frank', role: 'Farmer', email: 'frank@gmail.com' }
];

// Function to display the list of users
function displayUsers() {
    const usersTableBody = document.getElementById('users-table-body');
    usersTableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.role}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Function to show the add user form
function showAddUserForm() {
    document.getElementById('add-user-form').style.display = 'block';
}

// Function to hide the add user form
function hideAddUserForm() {
    document.getElementById('add-user-form').style.display = 'none';
}

// Function to add a new user
function addUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;

    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        username: username,
        role: role,
        email: email
    };

    users.push(newUser);
    displayUsers();
    hideAddUserForm();
    event.target.reset();
}

// Function to edit a user (placeholder)
function editUser(id) {
    alert(`Edit user with ID: ${id}`);
    // Implement edit functionality if needed
}

// Function to delete a user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
    document.getElementById('add-user-form').addEventListener('submit', addUser);
});