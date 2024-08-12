// Define the roles array
const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Manager' },
  { id: 3, name: 'User' }
];

// Function to display the roles in the role input field
function displayRoles() {
  const roleInput = document.getElementById('role');
  const roleOptions = roles.map(role => {
    return `<option value="${role.name}">${role.name}</option>`;
  });
  roleInput.innerHTML = roleOptions.join('');
}

// Call the displayRoles function to populate the role input field
displayRoles();

// Function to add a new role
function addRole() {
  const newRoleName = prompt('Enter the new role name:');
  if (newRoleName) {
    const newRoleId = roles.length + 1;
    roles.push({ id: newRoleId, name: newRoleName });
    displayRoles();
  }
}

// Function to delete a role
function deleteRole() {
  const roleId = prompt('Enter the ID of the role to delete:');
  if (roleId) {
    const roleIndex = roles.findIndex(role => role.id === parseInt(roleId));
    if (roleIndex !== -1) {
      roles.splice(roleIndex, 1);
      displayRoles();
    } else {
      alert('Role not found!');
    }
  }
}

// Add event listeners to the add and delete role buttons
document.getElementById('add-role-btn').addEventListener('click', addRole);
document.getElementById('delete-role-btn').addEventListener('click', deleteRole);