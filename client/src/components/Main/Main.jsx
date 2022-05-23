import React, { useContext } from "react";
import Form from "./Form";
import Login from "./Login";
import Dashboard from "./DashBoard";
import { Route, Routes } from 'react-router-dom';
import { LoggedContext } from "../../context/loggedContext";

const Main = () => {
  const { logged } = useContext(LoggedContext);

  return <Routes>
      <Route element={<Form/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      {logged ? <Route element={<Dashboard/>} path='/dashboard'/> : ''}
      
  </Routes>;
  
};

export default Main;


