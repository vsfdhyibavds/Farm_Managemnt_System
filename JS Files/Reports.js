// reports.js

// Sample data (This can be replaced with real data from a database)
const sampleData = {
    crop: [
        { id: 1, name: 'Wheat', type: 'Cereal', quantity: 1000, unitPrice: 20 },
        { id: 2, name: 'Corn', type: 'Cereal', quantity: 1500, unitPrice: 15 }
    ],
    livestock: [
        { id: 1, species: 'Cattle', breed: 'Angus', age: 3, weight: 700 },
        { id: 2, species: 'Sheep', breed: 'Merino', age: 2, weight: 80 }
    ],
    inventory: [
        { id: 1, name: 'Fertilizer', category: 'Agriculture', quantity: 100, unitPrice: 50.00 },
        { id: 2, name: 'Tractor', category: 'Equipment', quantity: 5, unitPrice: 50000.00 }
    ]
};

// Function to handle report generation
function generateReport(event) {
    event.preventDefault();
    const reportType = document.getElementById('reportType').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (reportType && startDate && endDate) {
        let reportData = sampleData[reportType];
        let filteredData = reportData.filter(item => {
            // Here you can filter data based on dates if your data has date fields
            // Currently, it just returns all data for the selected type
            return true;
        });

        displayReport(filteredData, reportType);
    }
}

// Function to display the generated report
function displayReport(data, reportType) {
    const reportResult = document.getElementById('reportResult');
    reportResult.innerHTML = `<h3>${capitalizeFirstLetter(reportType)} Report</h3>`;
    
    let table = '<table><thead><tr>';
    if (reportType === 'crop') {
        table += '<th>ID</th><th>Name</th><th>Type</th><th>Quantity</th><th>Unit Price</th>';
    } else if (reportType === 'livestock') {
        table += '<th>ID</th><th>Species</th><th>Breed</th><th>Age</th><th>Weight</th>';
    } else if (reportType === 'inventory') {
        table += '<th>ID</th><th>Name</th><th>Category</th><th>Quantity</th><th>Unit Price</th>';
    }
    table += '</tr></thead><tbody>';

    data.forEach(item => {
        table += '<tr>';
        for (const key in item) {
            table += `<td>${item[key]}</td>`;
        }
        table += '</tr>';
    });

    table += '</tbody></table>';
    reportResult.innerHTML += table;
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Attach event listener to the form
document.getElementById('reportForm').addEventListener('submit', generateReport);
