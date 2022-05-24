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
      <h3 className="heading">Colegios inscritos por Comunidad Autónoma 2021</h3>
      <div className='progress_bar_class'>
      {/* {totalCam2021()} */}
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

    </div>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div>
      <p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
