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
  const [year, setYear] = React.useState('');
  
  const handleChange = (event) => {
    setYear(event.target.value);
  };

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
      labels: ['Colegios Inscritos 2020','Colegios Inscritos 2021', 'Colegios Inscritos 2022' ],
      datasets: [
        {
          label: '% Complete',
          data: [200, 600, 300],
          backgroundColor: [
            '#EF6424',
            '#F1F1F1', 
            '#789086'

          ],
          borderColor: [
            '#FCAE73',
            '#FCAE73',
            '#FCAE73'

          ],
          borderWidth: 0.5,
          cutout: 100,
        },
      ],
    };
    return <div>
    <div><FormControl sx={{ m: 2, fontFamily: 'Nunito', minWidth: 80, color:'yellow' }} size="small">
    <InputLabel sx={{ color:'grey' }}id="demo-select-small">Año</InputLabel>
    <Select sx={{ fontFamily: 'Nunito', color:'#EF6424', fontSize:'0.9rem' }}
      labelId="demo-select-small"
      id="demo-select-small"
      value={year}
      label="Año"
      onChange={handleChange}
    >
      <MenuItem value={8}><p className='par_class'>2020</p></MenuItem>
      <MenuItem value={9}><p className='par_class'>2021</p></MenuItem>
      <MenuItem value={10}><p className='par_class'>2022</p></MenuItem>
    </Select>
  </FormControl></div>
  <h1 className='h1_class'>13%</h1>
  <div className='donut_class'><Doughnut data={data} /></div>
  </div>;
  };

  return <div>
    {totalInscribed2021()}
  </div>;

}
export default PieChart;