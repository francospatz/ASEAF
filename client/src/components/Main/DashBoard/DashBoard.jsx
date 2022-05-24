import React, { useContext, useState } from "react";
import PieChart from "./PieChart";
import Progressbar from "./Progress_bar";
import { LoggedContext } from "../../../context/loggedContext";
import axios from 'axios';

const DashBoard = () => {
  const { logged } = useContext(LoggedContext);
  const [schoolsCam, setSchoolsCam] = useState([]);

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
      <h3 className="heading">Colegios inscritos por Comunidad Autónoma</h3>
      <div className='progress_bar_class'>
      {/* {totalCam2021()} */}
      <p>Andalucía</p><Progressbar bgcolor="#EF6424" progress='35' />
      <p>Aragón</p><Progressbar bgcolor="#EF6424" progress='44' />
      <p>Principado de Asturias</p><Progressbar bgcolor="#EF6424" progress='50' />
      <p>Islas Baleares</p><Progressbar bgcolor="#EF6424" progress='67' />
      <p>Canarias</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Cantabria</p><Progressbar bgcolor="#EF6424" progress='25' />
      <p>Castilla y León</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Castilla-La Mancha</p><Progressbar bgcolor="#EF6424" progress='50' />
      <p>Cataluña</p><Progressbar bgcolor="#EF6424" progress='33' />
      <p>Comunidad Valenciana</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Extremadura</p><Progressbar bgcolor="#EF6424" progress='25' />
      <p>Galicia</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Comunidad de Madrid</p><Progressbar bgcolor="#EF6424" progress='50' />
      <p>Región de Murcia</p><Progressbar bgcolor="#EF6424" progress='33' />
      <p>Comunidad de Navarra</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>País Vasco</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>La Rioja</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Ciudad Autónoma de Ceuta</p><Progressbar bgcolor="#EF6424" progress='45' />
      <p>Ciudad Autónoma de Melilla</p><Progressbar bgcolor="#EF6424" progress='45' />

      </div>

    </div>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div>
      <p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
