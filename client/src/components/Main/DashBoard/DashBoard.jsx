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
      <p>Andalucía</p><Progressbar bgcolor="orange" progress='35'  height={30} />
      <p>Aragón</p><Progressbar bgcolor="orange" progress='44'  height={30} />
      <p>Principado de Asturias</p><Progressbar bgcolor="orange" progress='50'  height={30} />
      <p>Islas Baleares</p><Progressbar bgcolor="orange" progress='67'  height={30} />
      <p>Canarias</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Cantabria</p><Progressbar bgcolor="orange" progress='25'  height={30} />
      <p>Castilla y León</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Castilla-La Mancha</p><Progressbar bgcolor="orange" progress='50'  height={30} />
      <p>Cataluña</p><Progressbar bgcolor="orange" progress='33'  height={30} />
      <p>Comunidad Valenciana</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Extremadura</p><Progressbar bgcolor="orange" progress='25'  height={30} />
      <p>Galicia</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Comunidad de Madrid</p><Progressbar bgcolor="orange" progress='50'  height={30} />
      <p>Región de Murcia</p><Progressbar bgcolor="orange" progress='33'  height={30} />
      <p>Comunidad de Navarra</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>País Vasco</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>La Rioja</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Ciudad Autónoma de Ceuta</p><Progressbar bgcolor="orange" progress='12'  height={30} />
      <p>Ciudad Autónoma de Melilla</p><Progressbar bgcolor="orange" progress='12'  height={30} />

      </div>

    </div>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div>
      <p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
