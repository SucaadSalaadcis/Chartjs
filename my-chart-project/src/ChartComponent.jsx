import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'My Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75,192,192,1)', // Line color
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: true,
                    color: 'rgba(0,0,0,0.1)',  // Grid line color
                    borderDash: [10, 10],  // Dashed grid lines
                },
            },
            y: {
                grid: {
                    display: true,
                    color: 'rgba(0,0,0,0.1)',  // Grid line color
                    borderDash: [10, 10]  // Dashed grid lines
                },
                // border: {
                //     dash: [5, 10]
                // }
            },
        },
        layout: {
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
        },
        // Chart outer border
        plugins: {
            legend: {
                display: true,
            },
        },
        // Chart outer border styling
        borderColor: 'rgba(0,0,0,0.3)',  // Outer border color
        borderWidth: 3, // Outer border width
    };

    return <Line data={data} options={options} />;
};

export default ChartComponent;
