import React, { useContext } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Progressbar from "./Progress_bar"
import { LoggedContext } from "../../../context/loggedContext";

const DashBoard = () => {
  const { logged } = useContext(LoggedContext);

  if (logged) {
    // Dentro de este return irán todas las gráficas
    return <div>
      <PieChart/>
      <h3 className="heading">Colegios inscritos por Comunidad Autónoma</h3>
      <div className='progress_bar_class'>
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
      <BarChart/>
   {/*    <LineChart/> */}

    </div>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div><p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
