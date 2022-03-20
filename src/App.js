import "./App.css";
import BarChart from './Components/BarChart';
import DoughnutChart from "./Components/DoughnutChart";
import PieChart from "./Components/PieChart";
import CombinedChart from "./Components/CombinedChart";
import axios from "axios";
import { useState } from "react/cjs/react.production.min";
import { useEffect } from "react/cjs/react.production.min";



/*const [CovidData, setCovidData ] = useState()

  axios.get("http://localhost:5000/country-ex")
    .then((response) => {
      setCovidData(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    });*/

const CovidData = [
  {
      "_id": "61de4a19c7c63d9380164d7b",
      "Country": "United States",
      "CoronavirusCases": 63390876,
      "Deaths": 863896,
      "Recovered": 42641852
  },
  {
      "_id": "61de4a20c7c63d9380164e55",
      "Country": "India",
      "CoronavirusCases": 36060902 ,
      "Deaths": 484359,
      "Recovered": 34615308
  },
  {
      "_id": "61de4a20c7c63d9380164e52",
      "Country": "Brazil",
      "CoronavirusCases": 22630142,
      "Deaths": 620281,
      "Recovered": 21626836
  },
  {
      "_id": "61de4a20c7c63d9380164e56",
      "Country": "France",
      "CoronavirusCases": 12573263,
      "Deaths": 126059,
      "Recovered": 5162757
  },
  {
      "_id": "61de4a20c7c63d9380164e51",
      "Country": "United Kingdom",
      "CoronavirusCases": 14732594,
      "Deaths": 150609,
      "Recovered": 10945874
  },

]


export const FetchCovidData = () => {

  return axios.get('http://localhost:5000/country-ex')
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export default function App() {
  const [CovidData, setCovidData] = useState([]);

  useEffect(() => {
    setCovidData(FetchCovidData())
  }, [])
  
  return (

    <div className="App">
    
    <div className='block1'>
      <h1 className='head'>Covid-19</h1>  
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>  

    <div className='block2'>
      <div className="bar" style={{width:500}}>
        <BarChart ChartData={ CovidData }/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="pie" style={{width:500}}>
        <PieChart ChartData={ CovidData }/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="doughnut" style={{width:500}}>
        <DoughnutChart ChartData={ CovidData }/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="combined" style={{width:500}}>
        <CombinedChart ChartData={ CovidData }/>
      </div>
    </div>

    </div>
  );
}

