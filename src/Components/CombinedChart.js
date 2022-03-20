import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


function CombinedChart({ ChartData }) {
        
  const labels = ChartData.map((data) => data.Country);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Coronavirus Cases',
        data: ChartData.map((data) => data.CoronavirusCases),
        borderColor: 'red', 
        backgroundColor: 'red',
      },
      {
        label: 'Deaths',
        data: ChartData.map((data) => data.Deaths),
        borderColor: 'blue' ,
        backgroundColor: 'blue',
      },
      {
        label: 'Recoveries',
        data: ChartData.map((data) => data.Recovered),
        borderColor: 'green',
        backgroundColor: 'green',
      },
      
    ],
    
  };
  
  return <div>
    <Bar data={data} options={{indexAxis:'y'}}/>
    </div>
}

export default CombinedChart;