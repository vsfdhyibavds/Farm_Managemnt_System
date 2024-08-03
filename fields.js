// Sample data for demonstration purposes
let fields = [
    { id: 1, name: 'North Field', location: 'North', size: 50 },
    { id: 2, name: 'East Field', location: 'East', size: 75 }
];

// Function to display the list of fields
function displayFields() {
    const fieldsTableBody = document.getElementById('fieldsTableBody');
    fieldsTableBody.innerHTML = '';

    fields.forEach(field => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="ID">${field.id}</td>
            <td data-label="Field Name">${field.name}</td>
            <td data-label="Location">${field.location}</td>
            <td data-label="Size">${field.size} acres</td>
            <td data-label="Actions">
                <button class="actions-button" onclick="editField(${field.id})">Edit</button>
                <button class="actions-button" onclick="deleteField(${field.id})">Delete</button>
            </td>
        `;
        fieldsTableBody.appendChild(row);
    });
}

// Function to show the add field form
function showAddFieldForm() {
    document.getElementById('addFieldForm').style.display = 'flex';
}

// Function to hide the add field form
function hideAddFieldForm() {
    document.getElementById('addFieldForm').style.display = 'none';
}

// Function to add a new field
function addField(event) {
    event.preventDefault();
    const fieldName = document.getElementById('fieldName').value;
    const location = document.getElementById('location').value;
    const size = document.getElementById('size').value;

    const newField = {
        id: fields.length + 1,
        name: fieldName,
        location: location,
        size: size
    };

    fields.push(newField);
    displayFields();
    hideAddFieldForm();
    event.target.reset();
}

// Function to edit a field
function editField(id) {
    alert(`Edit field with ID: ${id}`);
    // Implement edit functionality if needed
}

// Function to delete a field
function deleteField(id) {
    fields = fields.filter(field => field.id !== id);
    displayFields();
}

// Initial display of fields
displayFields();
