import React, { useContext, useState } from "react";
import PieChart from "./PieChart";
import Progressbar from "./Progress_bar";
import { LoggedContext } from "../../../context/loggedContext";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DashBoard = () => {
  const { logged } = useContext(LoggedContext);
  const [schoolsCam, setSchoolsCam] = useState([]);
  const [comaut, setComaut] = useState(true);


  function handleCollegue() {
     setComaut(!comaut)
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Santa María del Pilar', '\u260E' , 6.0, 24, 4.0),
    createData('Eusebio da Guarda', '\u260E', 9.0, 37, 4.3),
    createData('Sagrado Corazón de Jesús', '\u260E', 16.0, 24, 6.0),
    createData('Virgen de Atocha', '\u260E', 3.7, 67, 4.3),
    createData('Ramiro de Maeztu', '\u260E', 16.0, 49, 3.9),
    createData('Blanco Amor', '\u260E', 6.0, 24, 4.0),
    createData('Fernando Wirtz', '\u260E', 9.0, 37, 4.3),
    createData('Clara Campoamor', '\u260E', 16.0, 24, 6.0),
    createData('Colegio San Ildefonso', '\u260E', 3.7, 67, 4.3),

  ];


  const getTotalCam2021 = () => {
    /* try {
      console.log('entra en fetch');
      const res = await axios.get('/api/totalcam');
      const json = await res.data;
      console.log(json, "esto es json");
      setSchoolsCam(json);
      console.log(schoolsCam)
      
    } catch (err) {
      console.log(err);
    } finally {
      return
    } */


  };

  const totalCam2021 = () => {

    //getTotalCam2021();


    return schoolsCam.map((school, i) => (
      <div>
        <p>{school.estado}</p><Progressbar bgcolor="orange" progress={school.colegios_inscritos}  height={30} />
      </div>
    ));

  };

  //getTotalCam2021()

  if (logged) {
    // Dentro de este return irán todas las gráficas
    
    return <div>
      <PieChart/>
      <div className="optionselected">
      <button onClick={handleCollegue} >Com. Autónoma</button>
      <button onClick={handleCollegue} >No inscritos</button>
      </div>
      {comaut?
      <div className='progress_bar_class'>
      <p>Andalucía</p><Progressbar bgcolor="#EF6424" progress='35' />
      <h5 className='p_desc_class'>29 de 409 colegios</h5>
      <p>Aragón</p><Progressbar bgcolor="#EF6424" progress='44' />
      <h5 className='p_desc_class'>20 de 409 colegios</h5>
      <p>Principado de Asturias</p><Progressbar bgcolor="#EF6424" progress='50' />
      <h5 className='p_desc_class'>31 de 409 colegios</h5>
      <p>Islas Baleares</p><Progressbar bgcolor="#EF6424" progress='67' />
      <h5 className='p_desc_class'>29 de 409 colegios</h5>
      <p>Canarias</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>32 de 409 colegios</h5>
      <p>Cantabria</p><Progressbar bgcolor="#EF6424" progress='25' />
      <h5 className='p_desc_class'>29 de 409 colegios</h5>
      <p>Castilla y León</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>18 de 409 colegios</h5>
      <p>Castilla-La Mancha</p><Progressbar bgcolor="#EF6424" progress='50' />
      <h5 className='p_desc_class'>23 de 409 colegios</h5>
      <p>Cataluña</p><Progressbar bgcolor="#EF6424" progress='33' />
      <h5 className='p_desc_class'>66 de 409 colegios</h5>
      <p>Comunidad Valenciana</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>100 de 409 colegios</h5>
      <p>Extremadura</p><Progressbar bgcolor="#EF6424" progress='25' />
      <h5 className='p_desc_class'>21 de 409 colegios</h5>
      <p>Galicia</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>23 de 409 colegios</h5>
      <p>Comunidad de Madrid</p><Progressbar bgcolor="#EF6424" progress='50' />
      <h5 className='p_desc_class'>45 de 409 colegios</h5>
      <p>Región de Murcia</p><Progressbar bgcolor="#EF6424" progress='33' />
      <h5 className='p_desc_class'>8 de 409 colegios</h5>
      <p>Comunidad de Navarra</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>23 de 409 colegios</h5>
      <p>País Vasco</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>32 de 409 colegios</h5>
      <p>La Rioja</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>7 de 409 colegios</h5>
      <p>Ciudad Autónoma de Ceuta</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>15 de 409 colegios</h5>
      <p>Ciudad Autónoma de Melilla</p><Progressbar bgcolor="#EF6424" progress='45' />
      <h5 className='p_desc_class'>40 de 409 colegios</h5>

      </div>
    : <div className="noinscritos">
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: '#fdebd0'
 }}>
        <TableRow>
          <TableCell sx={{ fontSize: '1.5rem' }}>Colegio</TableCell>
          <TableCell align="right" sx={{ fontSize: '1.5rem' }}>Contacto</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ paddingLeft:"10rem"}}>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           
          >
            <TableCell component="th" scope="row" sx={{ fontSize: '1rem' }}> {row.name}</TableCell>
            <TableCell align="right" sx={{ fontSize: '1.8rem', color: '#145a32' }}>{row.calories}</TableCell>
            {/* <TableCell align="right">{row.fat}</TableCell> */}
           {/*  <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  }
    </div>;
 }  else {
    // Este return lo devuelve si el usuario no está logeado
    return <div>
      <p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
