import React, { useContext } from "react";
import Form from "./Form";
import Login from "./Login";
import Dashboard from "./DashBoard";
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoggedContext } from "../../context/loggedContext";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const { logged } = useContext(LoggedContext);
  const location = useLocation();
  return <AnimatePresence exitBeforeEnter>
    <Routes key={location.pathname} location={location}>
      <Route element={<Form />} path='/' />
      <Route element={<Login />} path='/login' />
      {logged ? <Route element={<Dashboard />} path='/dashboard' /> : ''}
    </Routes>
  </AnimatePresence>;

};

export default Main;


