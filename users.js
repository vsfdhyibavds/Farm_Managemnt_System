document.addEventListener("DOMContentLoaded", function() {
    fetch('fetch_users.php')
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
                    <td data-label="Actions">
                        <button class="actions-button" onclick="editUser(${user.id})">Edit</button>
                        <button class="actions-button" onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                `;
                usersTableBody.appendChild(row);
            });
        });
});

function editUser(id) {
    // Open modal and populate form with user data
    // Fetch user data and populate the form
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        fetch('delete_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Refresh the user list or notify user
                location.reload();
            }
        });
    }
}
