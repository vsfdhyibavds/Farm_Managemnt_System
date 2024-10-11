// Sample data for demonstration purposes
let crops = [
    { id: 1, name: 'Wheat', variety: 'Durum', area: 50, plantingDate: '2024-03-01', harvestDate: '2024-08-15' },
    { id: 2, name: 'Corn', variety: 'Dent', area: 75, plantingDate: '2024-04-15', harvestDate: '2024-09-30' },
    { id: 3, name: 'Soybean', variety: 'Roundup Ready', area: 65, plantingDate: '2024-02-19', harvestDate: '2024-12-27'}
];

document.addEventListener("DOMContentLoaded", function() {
    const cropTableBody = document.getElementById("cropTableBody");

    // Display the existing crops
    displayCrops();

    // Function to display crops in the table
    function displayCrops() {
        cropTableBody.innerHTML = ""; // Clear the table body
        crops.forEach(crop => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${crop.id}</td>
                <td>${crop.name}</td>
                <td>${crop.variety}</td>
                <td>${crop.area}</td>
                <td>${crop.plantingDate}</td>
                <td>${crop.harvestDate}</td>
                <td><button onclick="editCrop(${crop.id})">Edit</button> <button onclick="deleteCrop(${crop.id})">Delete</button></td>
            `;
            cropTableBody.appendChild(row);
        });
    }

    // Function to edit a crop
    window.editCrop = function(id) {
        const crop = crops.find(c => c.id === id);
        if (crop) {
            document.getElementById('edit-crop-id').value = crop.id;
            document.getElementById('edit-crop-name').value = crop.name;
            document.getElementById('edit-crop-variety').value = crop.variety;
            document.getElementById('edit-crop-area').value = crop.area;
            document.getElementById('edit-planting-date').value = crop.plantingDate;
            document.getElementById('edit-harvest-date').value = crop.harvestDate;

            // Show the modal
            document.getElementById('editCropModal').style.display = 'block';
        }
    };

    // Function to delete a crop
    window.deleteCrop = function(id) {
        crops = crops.filter(c => c.id !== id);
        displayCrops();
    };

    // Close modal function
    window.closeModal = function() {
        document.getElementById('editCropModal').style.display = 'none';
    };

    // Handle the edit crop form submission
    document.getElementById('editCropForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const id = parseInt(document.getElementById('edit-crop-id').value);
        const updatedCrop = {
            id: id,
            name: document.getElementById('edit-crop-name').value,
            variety: document.getElementById('edit-crop-variety').value,
            area: parseInt(document.getElementById('edit-crop-area').value),
            plantingDate: document.getElementById('edit-planting-date').value,
            harvestDate: document.getElementById('edit-harvest-date').value
        };

        const index = crops.findIndex(c => c.id === id);
        if (index !== -1) {
            crops[index] = updatedCrop;
            displayCrops();
            closeModal();
        }
    });
});
