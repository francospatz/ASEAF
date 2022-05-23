import React from "react";
import Form from "./Form";
import Login from "./Login";
import Dashboard from "./DashBoard";
import { Route, Routes } from 'react-router-dom';

const Main = () => {

  return <Routes>
      <Route element={<Form/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
  </Routes>;
  
};

export default Main;


