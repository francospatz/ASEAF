import React from "react";
import logo1 from '../../assets/logos/facebook.png';
import logo2 from '../../assets/logos/twitter.png';
import logo3 from '../../assets/logos/instagram.png';
import logo4 from '../../assets/logos/youtube.png';
import logo5 from '../../assets/logos/escudo.png';
import { useForm } from "react-hook-form";

const Footer = () => {
  
  const { register, handleSubmit } = useForm();

return <footer>
    <h2 id="contacth2" >CONTACTO</h2>
    <div>
      <h3>C/ Saavedra Fajardo, 5 y 7.</h3>
      <h3>28011, Madrid</h3>
      <h3>Correo: aseaf@aseaf.org<a href="aseaf@aseaf.org">www.aseaf.org</a></h3>
      <h3>Teléfono: 633 738 461</h3>
      <h3>Página web: <a href="www.aseaf.org">www.aseaf.org</a></h3>
    </div>

    <h2 className="seguir">SÍGUENOS</h2>
    <div className="logos">
    <img src={logo1} alt='logo' style={{width: 30}}></img>
    <img src={logo2} alt='logo' style={{width: 30}}></img>
    <img src={logo3} alt='logo' style={{width: 30}}></img>
     <img src={logo4} alt='logo' style={{width: 31}}></img>
    </div>

    <h2 className="seguir">NEWSLETTER</h2>
   <form className="formulariofooter">
    <input type="email" {...register("email")} name="email" placeholder="Correo electronico" required/>
    <input type="submit" value="Suscribete"/>
    </form>

    <h3 id="asociacion">Asociación estatal de acogimiento familiar. 2022</h3>

    <div className="asocialogo">
    <img src={logo5} alt='logo'></img>
    <h4>Miembro de la Orden Civil de la Solidaridad Social(cruz de Plata). Enero de 2016</h4>
    </div>

    <h3 id="politics">Aviso legal | Politica de cookies | Política de privacidad</h3>
 
  </footer>;
};

export default Footer;
