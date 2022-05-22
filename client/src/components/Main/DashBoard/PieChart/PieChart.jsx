import React, {useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


function PieChart() {

  const fetch = async () => {
    try {
      console.log('entra en fetch');
       const res = await axios.get('http://localhost:5000/apischools/total');
       console.log(await res);
       const json = await res.data;
       console.log(json,"esto es json");
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
 }, []);

}
export default PieChart;