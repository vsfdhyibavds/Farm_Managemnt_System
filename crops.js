// Sample data for demonstration purposes
let crops = [
    { id: 1, name: 'Wheat', field: 'North Field', plantDate: '2024-03-15', harvestDate: '2024-09-15' },
    { id: 2, name: 'Corn', field: 'East Field', plantDate: '2024-04-01', harvestDate: '2024-10-10' }
];

// Function to display the list of crops
function displayCrops() {
    const cropsTableBody = document.getElementById('cropsTableBody');
    cropsTableBody.innerHTML = '';

    crops.forEach(crop => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${crop.id}</td>
            <td>${crop.name}</td>
            <td>${crop.field}</td>
            <td>${crop.plantDate}</td>
            <td>${crop.harvestDate}</td>
            <td>
                <button onclick="editCrop(${crop.id})">Edit</button>
                <button onclick="deleteCrop(${crop.id})">Delete</button>
            </td>
        `;
        cropsTableBody.appendChild(row);
    });
}

// Function to show the add crop form
function showAddCropForm() {
    document.getElementById('addCropForm').style.display = 'block';
}

// Function to hide the add crop form
function hideAddCropForm() {
    document.getElementById('addCropForm').style.display = 'none';
}

// Function to add a new crop
function addCrop(event) {
    event.preventDefault();
    const cropName = document.getElementById('cropName').value;
    const field = document.getElementById('field').value;
    const plantDate = document.getElementById('plantDate').value;
    const harvestDate = document.getElementById('harvestDate').value;

    const newCrop = {
        id: crops.length + 1,
        name: cropName,
        field: field,
        plantDate: plantDate,
        harvestDate: harvestDate
    };

    crops.push(newCrop);
    displayCrops();
    hideAddCropForm();
    event.target.reset();
}

// Function to edit a crop
function editCrop(id) {
    // Implement edit functionality if needed
    alert(`Edit crop with ID: ${id}`);
}

// Function to delete a crop
function deleteCrop(id) {
    crops = crops.filter(crop => crop.id !== id);
    displayCrops();
}

// Initial display of crops
displayCrops();
