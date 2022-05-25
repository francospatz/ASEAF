import React from "react";
import logo1 from '../../assets/logos/facebook.png';
import logo2 from '../../assets/logos/twitter.png';
import logo3 from '../../assets/logos/instagram.png';
import logo4 from '../../assets/logos/youtube.png';
import logo5 from '../../assets/logos/escudo.png';
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const { register, handleSubmit } = useForm();

  if (pathname === '/login' || pathname === '/dashboard') {
    return null;
  } else {
    return <footer>
      <div className="container">

      
      <div className="card-container">
        <h2 id="contacth2" >CONTACTO</h2>
        <h3>C/ Saavedra Fajardo, 5 y 7.</h3>
        <h3>28011, Madrid</h3>
        <h3>Correo: aseaf@aseaf.org</h3>
        <h3>Teléfono: 633 738 461</h3>
        <h3>Página web: <a href="https://www.aseaf.org" target="_blank">www.aseaf.org</a></h3>
      </div>

      <div className="card-container">
        <h2 className="seguir">SÍGUENOS</h2>
        <div className="logos">
          <img src={logo1} alt='logo' style={{ width: 30 }}></img>
          <img src={logo2} alt='logo' style={{ width: 30 }}></img>
          <img src={logo3} alt='logo' style={{ width: 30 }}></img>
          <img src={logo4} alt='logo' style={{ width: 31 }}></img>
        </div>
      </div>

      <div className="card-container">
        <h2 id="seguir">NEWSLETTER</h2>
        <form className="formulariofooter">
          
          <input type="email" {...register("email")} name="email" placeholder="Correo electronico" required />
          <input type="submit" value="Suscribete   >"  className="submit-input"/>
         
        </form>
      </div>

      <div className="card-container">
        <h3 id="asociacion">Asociación estatal de acogimiento familiar. 2022</h3>
        <div className="asocialogo">
          <img src={logo5} alt='logo' className="orden__logo"></img>
          <h3 className="footer__txt">Miembro de la Orden Civil de la Solidaridad Social (cruz de Plata). Enero de 2016</h3>
        </div>
      </div>

     

      
      <div className="bottom-txt">
      <h3 id="politics">Aviso legal | Politica de cookies | Política de privacidad</h3>
      </div>
      </div>
     
    </footer>;
  }


};

export default Footer;
