// dashboard.js

// Crop Yield Over Time Chart
const ctxCropYield = document.getElementById('cropYieldChart').getContext('2d');
const cropYieldChart = new Chart(ctxCropYield, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Crop Yield (tons)',
            data: [10, 12, 8, 15, 20, 25, 30],
            borderColor: 'rgba(46, 204, 113, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Livestock Growth Chart
const ctxLivestockGrowth = document.getElementById('livestockGrowthChart').getContext('2d');
const livestockGrowthChart = new Chart(ctxLivestockGrowth, {
    type: 'bar',
    data: {
        labels: ['Cattle', 'Sheep', 'Goats', 'Pigs'],
        datasets: [{
            label: 'Livestock Count',
            data: [50, 30, 20, 10],
            backgroundColor: 'rgba(52, 152, 219, 1)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
