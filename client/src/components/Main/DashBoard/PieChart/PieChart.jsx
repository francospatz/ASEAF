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
    
  };

  const totalInscribed2021 = () => {

    getTotal2021();
 
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: ['Colegios Inscritos 2021'],
      datasets: [
        {
          label: '% Complete',
          data: [200, 600],
          backgroundColor: [
            '#EF6424',
            '#F1F1F1'

          ],
          borderColor: [
            '#FCAE73',
            'transparent'
          ],
          borderWidth: 0.5,
          cutout: 100,
        },
      ],
    };
    return <div className='donut_class'><Doughnut data={data} /></div>;
  };

  return <div>
    {totalInscribed2021()}
  </div>;

}
export default PieChart;