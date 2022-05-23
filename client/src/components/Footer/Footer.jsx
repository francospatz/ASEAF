import React from "react";
import logo1 from '../../assets/logos/facebook.png';
import logo2 from '../../assets/logos/twitter.png';
import logo3 from '../../assets/logos/instagram.png';
import logo4 from '../../assets/logos/youtube.png';
import { useForm } from "react-hook-form";

const Footer = () => {
  
  const { register, handleSubmit } = useForm();

return <footer>
    <h2>CONTACTO</h2>
    <div>
      <h3>C/Saavedra Fajardo, 5 y 7.</h3>
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

  </footer>;
};

export default Footer;
