import "./App.css";
import "./charts.css"
import virus from './images/virus.png';
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
  /*
  const [CovidData, setCovidData] = useState([]);

  useEffect(() => {
    setCovidData(FetchCovidData())
  }, [])
  */
  return (

    <div className="App">
      <div class="section1">
        <div class="row">
          <div class="column">
            <div class="covid_19_header">COVID-19</div>
            <p class="subheader">DATA VISUALIZATION</p>
            <p class="header_description">WELCOME TO THIS DATAT VISUALIZATION PROJECT AIMED AT</p>
            <p class="header_description">DISPLAYING IMPORTANT INFORMATION ABOUT OUR GLOBAL </p>
            <p class="header_description">PANDEMIC IN AN INTUITIVE FASHION</p>
          </div>
          <div class="column">
            <div class="imgbox">
              <img src={virus} alt="virus picture" class="responsiveimg" />
              </div>
          </div>
        </div>
      </div>
    
      <div class="section2">
        <div class="row">
          <div class="onecolumn">
            <div class = "bar">
              <BarChart ChartData={ CovidData }/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <PieChart ChartData={ CovidData }/>
          </div>

          <div class="column">
            <DoughnutChart ChartData={ CovidData }/>
          </div>
        </div>
      </div>
      </div>

    
  );
}

