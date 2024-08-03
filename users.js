// users.js
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com'
        },
    ];
document.addEventListener("DOMContentLoaded", function() {
    const addUserBtn = document.getElementById("add-user-btn");
    const addUserForm = document.getElementById("add-user-form");
    const cancelBtn = document.getElementById("cancel-btn");

    addUserBtn.addEventListener("click", function() {
        addUserForm.style.display = "block";
    });

    cancelBtn.addEventListener("click", function() {
        addUserForm.style.display = "none";
    });
});