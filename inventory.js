// inventory.js

// Sample data for inventory (This can be replaced with real data from a database)
let inventory = [
    { id: 1, name: 'Fertilizer', category: 'Agriculture', quantity: 100, unitPrice: 50.00 },
    { id: 2, name: 'Tractor', category: 'Equipment', quantity: 5, unitPrice: 50000.00 }
];

// Function to render inventory items in the table
function renderInventory() {
    const tableBody = document.getElementById('inventoryTableBody');
    tableBody.innerHTML = '';
    inventory.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.unitPrice}</td>
            <td>
                <button onclick="editItem(${item.id})">Edit</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to show the Add Item form
function showAddItemForm() {
    document.getElementById('addItemForm').style.display = 'flex';
}

// Function to hide the Add Item form
function hideAddItemForm() {
    document.getElementById('addItemForm').style.display = 'none';
}

// Function to add a new item
function addItem(event) {
    event.preventDefault();
    const id = inventory.length + 1;
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const unitPrice = document.getElementById('unitPrice').value;

    const newItem = { id, name, category, quantity, unitPrice };
    inventory.push(newItem);
    renderInventory();
    hideAddItemForm();
}

// Initial rendering of the inventory data
document.addEventListener('DOMContentLoaded', renderInventory);
