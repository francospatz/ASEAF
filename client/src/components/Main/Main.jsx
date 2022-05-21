import React from "react";
import Form from "./Form";
import Login from "./Login";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { Route, Routes } from 'react-router-dom';

const Main = () => {

  return <Routes>
      <Route element={<Form/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<BarChart/>} path='/bar'/>
      <Route element={<LineChart/>} path='/line'/>
  </Routes>;
  
};

export default Main;


