import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function PieChart() {

  const [schools, setSchools] = useState("");
  

  const getTotal2021 = async () => {
    try {
      
      const res = await axios.get('/api/total');
      const json = await res.data;
      setSchools(json[0].count);
      
    } catch (err) {
      console.log(err);
    }
    
  }

  const totalInscribed2021 = () => {

    getTotal2021()
 
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: ['Colegios Inscritos 2021'],
      datasets: [
        {
          label: '% Complete',
          data: [schools, 600],
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
    return <Doughnut data={data} />
  };

  return <div>
    {totalInscribed2021()}
  </div>;

}
export default PieChart;