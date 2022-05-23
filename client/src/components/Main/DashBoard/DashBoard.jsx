import React, { useContext } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { LoggedContext } from "../../../context/loggedContext";

const DashBoard = () => {
  const { logged } = useContext(LoggedContext);

  if (logged) {
    // Dentro de este return irán todas las gráficas
    return <div>
      <PieChart/>
      <BarChart/>
      <LineChart/>
    </div>;
  } else {
    // Este return lo devuelve si el usuario no está logeado
    return <div><p>Necesitas estar autentificado para ver el contenido</p></div>;
  };
  
};

export default DashBoard;
