// Sample data for demonstration purposes
let users = [
    { id: 1, name: 'Eugene', Role: 'Manger', Email: 'eugenco578@gmail.com' },
    { id: 2, name: 'East Field', Role: '', Email: '', location: 'East', size: 75 }
];

// Function to display the list of users
function displayusers() {
    const usersTableBody = document.getElementById('usersTableBody');
    usersTableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="ID">${user.id}</td>
            <td data-label="User Name">${user.name}</td>
            <td data-label="Role">${user.Role}</td>
            <td data-label="Email">${user.Email}</td>
            <td data-label="Actions">
                <button class="actions-button" onclick="editUser(${user.id})">Edit</button>
                <button class="actions-button" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Function to show the add user form
function showAdduserForm() {
    document.getElementById('adduserForm').style.display = 'flex';
}

// Function to hide the add user form
function hideAdduserForm() {
    document.getElementById('adduserForm').style.display = 'none';
}

// Function to add a new user
function adduser(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const Role = document.getElementById('Role').value;
    const Email = document.getElementById('Email').value;

    const newuser = {
        id: users.length + 1,
        name: userName,
        Role: Role,
        Email: Email
    };

    users.push(newuser);
    displayusers();
    hideAdduserForm();
    event.target.reset();
}

// Function to edit a user
function editUser(id) {
    alert(`Edit user with ID: ${id}`);
    // Implement edit functionality if needed
}

// Function to delete a user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayusers();
}

// Initial display of users
displayusers();