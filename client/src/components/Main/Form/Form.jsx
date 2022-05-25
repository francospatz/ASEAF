import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo1 from '../../../assets/logos/facebook.png';
import logo2 from '../../../assets/logos/twitter.png';
import logo3 from '../../../assets/logos/instagram.png';
import logo4 from '../../../assets/logos/youtube.png';
import { Link } from 'react-router-dom';
import AnimatedPage from "../../AnimatedPage";
import logo5 from '../../../assets/logos/children.png';

const Form = () => {

  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);

  const onSubmit = async (data) => {

    const obj = {
      nombre: data.colegio,
      telefono: data.telefono,
      email: data.email,
      provincia: data.Provincia,
      estado: data.comaut
    };
    
    const res1 = await axios.post('api/formtodb', obj);
    console.log(res1);
    const res2 = await axios.get(`api/sendemail/${obj.email}`);
    console.log(res2);
    setModal(!modal);
    
    document.getElementById("formularioaseaf").reset();

  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }


  return (
    <AnimatedPage>
      <form className="formulario" onSubmit={handleSubmit(onSubmit)} id="formularioaseaf">
        <div className="conjunto">
          <h2 className="titulo">Participa en el Día del Pijama 2021 rellenando este formulario</h2>
          <h4 className="subtitle">DATOS DEL COLEGIO QUE SE INSCRIBE</h4>
          

          <input className="box" type="text" {...register("colegio")} name="colegio" placeholder="Colegio" required onfocus="this.value=''" />

          <input className="box" type="text" name="comaut" {...register("comaut")} placeholder="Comunidad Autonoma" required />

          <input className="box" type="text" {...register("Provincia")} name="Provincia" placeholder="Provincia" required />

          <h4 className="subtitle">DATOS DEL RESPONSABLE QUE RELLENA EL FORMULARIO</h4>
          <input className="box" type="text"  {...register("nombre")} name="nombre" placeholder="Nombre" required />
          <input className="box" type="text"  {...register("apellidos")} name="apellidos" placeholder="Apellido" required />
          <input className="box" type="email"  {...register("email")} name="email" placeholder="Correo electronico" required />
          <input className="box" type="number"  {...register("telefono")} name="telefono" placeholder="Teléfono" required />
          <div className="final">
            <select className="box" name="Puesto" id="puesto" {...register("puesto")}>
              <option value="profesor">Puesto que desempeña</option>
              <option value="profesor">Director/a</option>
              <option value="director">Jefe/a de estudios</option>
              <option value="director">Profesor/a</option>
              <option value="director">Asistente o auxiliar</option>
              <option value="director">Psicólogo/a</option>
              <option value="director">Secretario/a</option>
              <option value="director">Otros</option>
            </select>
          </div>
          <h4 className="subtitle">CÓDIGO DE AUTENTICACIÓN</h4>
          <input className="box" type="password" name="CODE" placeholder="Código" required />
          <div id="locationcheckbox">
            <input type="checkbox" name="acepto" value="acepto" id="inpfinal" />
            <span> Acepto recibir las comunicaciones de ASEAF
            </span>
          </div>

          <input type="submit" value="Enviar" />

        </div>


      </form>
      <img src={logo5} alt='logo' className="logochildren"></img>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>¡Gracias por participar!</h3>
            <p>
              Tu colegio se ha inscrito en el Día del Pijama 2022.
            </p>
            <p>
              En breve recibirás un correo con contenido y activiades para que puedas organizar la jornada.
            </p>
            <div className="volvermodal">
              <Link to="/" className="close-modal" onClick={toggleModal}><p>Volver a la web</p></Link>
            </div>

            <h4>¡Compártelo!</h4>
            <div className="logos">
              <img src={logo1} alt='logo' style={{ width: 30 }}></img>
              <img src={logo2} alt='logo' style={{ width: 30 }}></img>
              <img src={logo3} alt='logo' style={{ width: 30 }}></img>
              <img src={logo4} alt='logo' style={{ width: 31 }}></img>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default Form;

