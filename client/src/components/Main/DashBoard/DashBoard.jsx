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
import AnimatedPage from "../../AnimatedPage";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import logo from '../../../assets/logos/lupa.png';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}



const DashBoard = () => {
  const { logged } = useContext(LoggedContext);
  const [comaut, setComaut] = useState(true);

  function handleCollegue() {
    setComaut(!comaut);
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Santa María del Pilar', '\u260E'),
    createData('Eusebio da Guarda', '\u260E'),
    createData('Sagrado Corazón de Jesús', '\u260E'),
    createData('Virgen de Atocha', '\u260E'),
    createData('Ramiro de Maeztu', '\u260E'),
    createData('Blanco Amor', '\u260E'),
    createData('Fernando Wirtz', '\u260E'),
    createData('Clara Campoamor', '\u260E'),
    createData('Colegio San Ildefonso', '\u260E'),

  ];

  //getTotalCam2021()

  if (logged) {

    return <AnimatedPage>
      <div className='datadiv'>
        <PieChart />
        <div>
          <div className="optionselected">
            <button onClick={handleCollegue} ><p>Comunidad Autónoma</p></button>
            <button onClick={handleCollegue} ><p>No Inscritos</p></button>
          </div>
          <div className="inputcontainer">
            <input className="boxfind" type="text" name="nombre" placeholder="Busca colegio" required />
          </div>

          {comaut ?
            <div className='progress_bar_class'>
              <p>Andalucía</p><Progressbar bgcolor="#EF6424" progress='7' />
              <h5 className='p_desc_class'>51 de 720 colegios</h5>
              <p>Aragón</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>22 de 365 colegios</h5>
              <p>Principado de Asturias</p><Progressbar bgcolor="#EF6424" progress='4' />
              <h5 className='p_desc_class'>12 de 301 colegios</h5>
              <p>Islas Baleares</p><Progressbar bgcolor="#EF6424" progress='3' />
              <h5 className='p_desc_class'>8 de 248 colegios</h5>
              <p>Canarias</p><Progressbar bgcolor="#EF6424" progress='5' />
              <h5 className='p_desc_class'>14 de 304 colegios</h5>
              <p>Cantabria</p><Progressbar bgcolor="#EF6424" progress='3' />
              <h5 className='p_desc_class'>8 de 230 colegios</h5>
              <p>Castilla y León</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>32 de 562 colegios</h5>
              <p>Castilla-La Mancha</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>34 de 590 colegios</h5>
              <p>Cataluña</p><Progressbar bgcolor="#EF6424" progress='9' />
              <h5 className='p_desc_class'>37 de 403 colegios</h5>
              <p>Comunidad Valenciana</p><Progressbar bgcolor="#EF6424" progress='7' />
              <h5 className='p_desc_class'>22 de 330 colegios</h5>
              <p>Extremadura</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>22 de 366 colegios</h5>
              <p>Galicia</p><Progressbar bgcolor="#EF6424" progress='9' />
              <h5 className='p_desc_class'>30 de 340 colegios</h5>
              <p>Comunidad de Madrid</p><Progressbar bgcolor="#EF6424" progress='10' />
              <h5 className='p_desc_class'>47 de 455 colegios</h5>
              <p>Región de Murcia</p><Progressbar bgcolor="#EF6424" progress='3' />
              <h5 className='p_desc_class'>8 de 230 colegios</h5>
              <p>Comunidad de Navarra</p><Progressbar bgcolor="#EF6424" progress='4' />
              <h5 className='p_desc_class'>12 de 280 colegios</h5>
              <p>País Vasco</p><Progressbar bgcolor="#EF6424" progress='9' />
              <h5 className='p_desc_class'>28 de 306 colegios</h5>
              <p>La Rioja</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>8 de 134 colegios</h5>
              <p>Ciudad Autónoma de Ceuta</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>7 de 113 colegios</h5>
              <p>Ciudad Autónoma de Melilla</p><Progressbar bgcolor="#EF6424" progress='6' />
              <h5 className='p_desc_class'>8 de 132 colegios</h5>

            </div>
            : <div className="noinscritos">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead sx={{
                    backgroundColor: '#ffE2d4'
                  }}>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem', fontFamily: 'Nunito' }}>Colegio</TableCell>
                      <TableCell align="right" sx={{ fontSize: '1rem', fontFamily: 'Nunito' }}>Contacto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ paddingLeft: "10rem" }}>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                      >
                        <TableCell component="th" scope="row" sx={{ fontSize: '0.8rem', fontFamily: 'Nunito' }}> {row.name}</TableCell>
                        <TableCell align="right" sx={{ fontSize: '0.9rem', fontFamily: 'Nunito', color: '#056447' }}>{row.calories}</TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          }
        </div>
      </div>
    </AnimatedPage>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div>
      <p>Necesitas estar autentificado para ver el contenido</p></div>;
  };

};

export default DashBoard;
