// livestock-management.js

// Sample data for livestock (This can be replaced with real data from a database)
let livestock = [
    { id: 1, species: 'Cattle', breed: 'Angus', age: 3, weight: 700 },
    { id: 2, species: 'Sheep', breed: 'Merino', age: 2, weight: 80 }
];

// Function to render livestock in the table
function renderLivestock() {
    const tableBody = document.getElementById('livestockTableBody');
    tableBody.innerHTML = '';
    livestock.forEach((animal) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${animal.id}</td>
            <td>${animal.species}</td>
            <td>${animal.breed}</td>
            <td>${animal.age}</td>
            <td>${animal.weight}</td>
            <td>
                <button onclick="editLivestock(${animal.id})">Edit</button>
                <button onclick="deleteLivestock(${animal.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to show the Add Livestock form
function showAddLivestockForm() {
    document.getElementById('addLivestockForm').style.display = 'flex';
}

// Function to hide the Add Livestock form
function hideAddLivestockForm() {
    document.getElementById('addLivestockForm').style.display = 'none';
}

// Function to add a new livestock
function addLivestock(event) {
    event.preventDefault();
    const id = livestock.length + 1;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;

    const newLivestock = { id, species, breed, age, weight };
    livestock.push(newLivestock);
    renderLivestock();
    hideAddLivestockForm();
}

// Initial rendering of the livestock data
document.addEventListener
