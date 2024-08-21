// Initialize users array from local storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// DOM elements
const addUserForm = document.getElementById('add-user-form');
const usersTableBody = document.getElementById('users-table-body');
const userForm = document.getElementById('user-form');

// Function to show add user form
function showAddUserForm() {
  addUserForm.style.display = 'block';
}

// Function to hide add user form
function hideAddUserForm() {
  addUserForm.style.display = 'none';
}

// Function to add user
function addUser(event) {
  event.preventDefault();

  // Collect form data
  const { username, role, email } = userForm.elements;

  // Create a new user object
  const newUser = {
    id: users.length + 1,
    username: username.value,
    role: role.value,
    email: email.value,
  };

  // Add new user to the users array and save it in local storage
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Refresh the users table
  populateUsersTable();

  // Hide the form and reset fields
  hideAddUserForm();
  userForm.reset();
}

// Function to populate users table
function populateUsersTable() {
  usersTableBody.innerHTML = '';

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
    usersTableBody.appendChild(row);
  });
}

// Function to delete user
function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
  localStorage.setItem('users', JSON.stringify(users));
  populateUsersTable();
}

// Load users when the page is loaded
document.addEventListener('DOMContentLoaded', populateUsersTable);