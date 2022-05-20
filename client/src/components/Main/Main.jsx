import React from "react";
import Form from "./Form";
import Login from "./Login";
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return <Routes>
      <Route element={<Form/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
  </Routes>;
};

export default Main;
