import React, {useState} from "react";
import { useForm } from "react-hook-form";
import logo from '../../../assets/Captura.PNG';

const Form = () => {

  const { register, handleSubmit } = useForm();
 
  const onSubmit = async (data) => {

    const obj = {
      email: data.email,
      password: data.password,
    };

    console.log(obj,"esto es obj");
  };

  return (
      <>
     <form className="formulariologin" onSubmit={handleSubmit(onSubmit)}>
            <div className="conjuntologin">
                  <img src={logo} alt='logo' style={{width: 230}}></img>
                  <h2 className="titulologin">Bienvenido</h2>
                  <input type="email" {...register("email")} name="email" placeholder="Correo electronico" required  onfocus="this.value=''" />
                  <input type="password" name="password" {...register("password")} placeholder="Password" required />
                 <input type="submit" value="Continuar"/>
             
          </div>
    </form> 
                <div className="reccontra">
                 <a  href="http://google.com">Recuperar contraseña</a>
                 </div>
                 </>
  );
};

export default Form;

