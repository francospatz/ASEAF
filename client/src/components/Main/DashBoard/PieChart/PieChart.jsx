import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function PieChart() {

  const [schools, setSchools] = useState("");
  const [year, setYear] = useState('');
  const [percentage, setPercentage] = useState("");
  
  const handleChange = (event) => {
  
    setYear(event.target.value);
    getTotal2021(event.target.value);
    
  };

  const getTotal2021 = async (value) => {
    try {
    
      if (value == 2020) {
        setPercentage('30%');
        setSchools('1800');
      } else if (value == 2021) {
        const res = await axios.get('/api/total');
        const json = await res.data;
        setSchools(json[0].count);
        setPercentage(Math.floor(json[0].count*100/6000)+'%');
      } else if (value == 2022) {
        setPercentage('67%');
        setSchools('4020');
      }
      
    } catch (err) {
      console.log(err);
    }
    
  };

  const totalInscribed2021 = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {

      labels: [/* `Colegios Inscritos ${year}` */], 

      datasets: [
        {
          label: '% Complete',
          data: [schools, 6000],
          backgroundColor: [
            '#EF6424',
            '#F1F1F1', 

          ],
          borderColor: [
            'transparent',
            'transparent',
          
          ],
          borderWidth: 0.5,
          cutout: 95,
          
          
        },
      ],
    };
    return <div>
      <h5 className='h5_class'>Colegios Inscritos</h5>
    <div><FormControl sx={{ m: 2, fontFamily: 'Nunito', minWidth: 80, color:'yellow' }} size="small">
    <InputLabel sx={{ color:'grey' }}id="demo-select-small">Año</InputLabel>
    <Select sx={{ fontFamily: 'Nunito', color:'#EF6424', fontSize:'0.9rem' }}
      labelId="demo-select-small"
      id="demo-select-small"
      value={year}
      label="Año"
      onChange={handleChange}
    >
      <MenuItem value={2020}><p className='par_class'>2020</p></MenuItem>
      <MenuItem value={2021}><p className='par_class'>2021</p></MenuItem>
      <MenuItem value={2022}><p className='par_class'>2022</p></MenuItem>
    </Select>
  </FormControl></div>
  <div className='chart_box'>
  <h1 className='h1_class'>{percentage}</h1>
  
  <div className='donut_class'><Doughnut data={data} /></div>

  <div className='box_text'>
  <p className='p_class'>{schools}</p>
  <p className='p_coleg_class'>inscritos</p>
  </div>
  </div>
  </div>;
  };

  return <div>
    {totalInscribed2021()}
  </div>;

}
export default PieChart;