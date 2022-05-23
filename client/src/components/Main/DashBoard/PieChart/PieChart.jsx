import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function PieChart() {

  const [schools, setSchools] = useState([]);
  const [schoolscam, setSchoolsCam] = useState([]);

  const fetch = async () => {
    try {
      console.log('entra en fetch');
       const res = await axios.get('/apischools/total');
       const json = await res.data;
       console.log(json,"esto es json");
       setSchools(json);
// Antes de hacer el map hacemos un filter para sacar de la petición http los elementos a los que les faltan campos
        /* if (quant !== '') {
          setLandings(json.slice(0,`${quant}`));
        } else {
          setLandings(json)
       } */
   
     } catch (error) {
       console.log('error', error);
      }
  };

  const fetchcam = async () => {
    try {
      console.log('entra en fetch');
       const res = await axios.get('/apischools/totalcam');
       const json = await res.data;
       setSchoolsCam(json);
// Antes de hacer el map hacemos un filter para sacar de la petición http los elementos a los que les faltan campos
        /* if (quant !== '') {
          setLandings(json.slice(0,`${quant}`));
        } else {
          setLandings(json)
       } */
   
     } catch (error) {
       console.log('error', error);
      }
  };


useEffect(() => {
  fetch();
  fetchcam();
 }, []);



ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Colegios Inscritos 2021'],
  datasets: [
    {
      label: '% Complete',
      data: [2500, 6000],
      backgroundColor: [
        '#E36C35',
        '#E0E0E0'
        
      ],
      borderColor: [
        'yellow',
        'black'
      ],
      borderWidth: 0.2,
      cutout: 150,
    },
  ],
};


return <Doughnut data={data} />;


}
export default PieChart;