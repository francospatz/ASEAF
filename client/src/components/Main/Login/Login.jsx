import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import logo from '../../../assets/Captura.PNG';
import { LoggedContext } from "../../../context/loggedContext";
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

  const { register, handleSubmit } = useForm();
  const { logged, setLogged, user, setUser } = useContext(LoggedContext);
 
  const onSubmit = async (data) => {

    const obj = {
      email: data.email,
      password: data.password,
    };

    const res = await axios.post("/api/login", obj);
    const loginRes = res.data;

    if (loginRes.msg === "Autentificación correcta.") {
      setLogged(true);
      setUser(data.email);
    }

    console.log(obj,"esto es obj");
  };

  const handleLogin = () => {
    return logged ? <Navigate to='/dashboard'/> : '';
  };

  return (
      <>
     <form className="formulariologin" onSubmit={handleSubmit(onSubmit)}>
            <div className="conjuntologin">
                  <img src={logo} alt='logo' style={{width: 230}}></img>
                  <h2 className="titulologin">Bienvenido</h2>
                  <input type="email" {...register("email")} name="email" placeholder="Correo electronico" required  /* onFocus={this.value=''} */ />
                  <input type="password" name="password" {...register("password")} placeholder="Password" required />
                 <input type="submit" value="Continuar"/>
             
          </div>
    </form> 
                <div className="reccontra">
                 <a  href="http://google.com">Recuperar contraseña</a>
                 </div>
                 {handleLogin()}
                 </>
  );
};

export default Form;

