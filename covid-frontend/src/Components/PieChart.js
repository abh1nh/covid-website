import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function PieChart({ ChartData }) {

  const labels = ChartData.map((data) => data.Country);
  const data = {
    labels: labels,
    datasets: [{
      label: 'Deaths',
      data: ChartData.map((data) => data.Deaths),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ]
      
    }]
  };


  return <Pie data={data} />
}

export default PieChart;