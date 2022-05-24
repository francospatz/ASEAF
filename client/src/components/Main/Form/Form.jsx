import axios from "axios";
import React, {useState} from "react";
import { useForm } from "react-hook-form";


const Form = () => {

  const { register, handleSubmit } = useForm();
 
  const onSubmit = async (data) => {

    const obj = {
      nombre: data.colegio,
      telefono: data.telefono,
      email: data.email,
      provincia: data.Provincia,
      estado: data.comaut
    };
    //Hay que arreglar el envío del form
    const res1 = await axios.post('api/formtodb', obj);
    console.log(res1);
    const res2 = await axios.get(`api/sendemail/${obj.email}`)
    console.log(res2);
    //console.log(obj,"esto es obj");
  };

  return (
    
     <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <div className="conjunto">
                  <h2 className="titulo">Participa en el Día del Pijama 2021 rellenando este formulario</h2>
                  <h4 className="subtitle">DATOS DEL COLEGIO QUE SE INSCRIBE</h4>
                  <input className="box" type="text" {...register("colegio")} name="colegio" placeholder="Colegio" required  onfocus="this.value=''" />
                  <input className="box" type="text" name="comaut" {...register("comaut")} placeholder="Comunidad Autonoma" required />
                  <input  className="box"type="text" {...register("Provincia")} name="Provincia" placeholder="Provincia" required />

                  <h4 className="subtitle">DATOS DEL RESPONSABLE QUE RELLENA EL FORMULARIO</h4>
                  <input className="box" type="text"  {...register("nombre")} name="nombre" placeholder="Nombre" required />
                  <input className="box" type="text"  {...register("apellidos")} name="apellidos"  placeholder="Apellido" required />
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
                          <div id="locationcheckbox">
                                <input type="checkbox" name="acepto" value="acepto" id="inpfinal"/>
                                <span> Acepto recibir las comunicaciones de ASEAF
                                </span>
                          </div>

                        <input type="submit" value="Enviar"/>
                  
          </div>
    </form> 
  );
};

export default Form;

