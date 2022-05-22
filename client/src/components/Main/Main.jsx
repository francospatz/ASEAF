import React from "react";
import Form from "./Form";
import Login from "./Login";
import BarChart from "./DashBoard/BarChart";
import LineChart from "./DashBoard/LineChart";
import PieChart from "./DashBoard/PieChart";
import { Route, Routes } from 'react-router-dom';

const Main = () => {

  return <Routes>
      <Route element={<Form/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<BarChart/>} path='/bar'/>
      <Route element={<LineChart/>} path='/line'/>
      <Route element={<PieChart/>} path='/pie'/>
  </Routes>;
  
};

export default Main;


