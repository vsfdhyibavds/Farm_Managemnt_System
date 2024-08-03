// farm-overview.js

// Farm Activity Distribution Chart
const ctxActivityDistribution = document.getElementById('activityDistributionChart').getContext('2d');
const activityDistributionChart = new Chart(ctxActivityDistribution, {
    type: 'pie',
    data: {
        labels: ['Crops', 'Livestock', 'Maintenance', 'Other'],
        datasets: [{
            label: 'Activity Distribution',
            data: [60, 20, 10, 10],
            backgroundColor: ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71']
        }]
    },
    options: {
        responsive: true
    }
});

// Annual Revenue Chart
const ctxAnnualRevenue = document.getElementById('annualRevenueChart').getContext('2d');
const annualRevenueChart = new Chart(ctxAnnualRevenue, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Annual Revenue (in $1000)',
            data: [500, 700, 800, 950, 1000],
            backgroundColor: '#3498db'
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
