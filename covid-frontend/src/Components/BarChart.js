import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function BarChart({ ChartData }) {

  const labels = ChartData.map((data) => data.Country);
  const data = {
    labels: labels,
    datasets: [{
      label: 'Coronavirus Cases',
      data: ChartData.map((data) => data.CoronavirusCases),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)'
      ]
      
    }],
  };

  return <Bar data={data} />
}

export default BarChart;                  