import React, {useState} from "react";
import { useForm } from "react-hook-form";


const Form = () => {

  const { register, handleSubmit } = useForm();
 
  const onSubmit = async (data) => {

    const obj = {
      colegio: data.colegio,
      comaut: data.comaut,
      provincia: data.Provincia,
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      puesto: data.puesto
    };

    console.log(obj,"esto es obj");
  };

  return (
    
     <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <div className="conjunto">
                  <h2 className="titulo">Participa en el Día del Pijama 2021 rellenando este formulario</h2>
                  <h4 className="subtitle">DATOS DEL COLEGIO QUE SE INSCRIBE</h4>
                  <input type="text" {...register("colegio")} name="colegio" placeholder="Colegio" required  onfocus="this.value=''" />
                  <input type="text" name="comaut" {...register("comaut")} placeholder="Comunidad Autonoma" required />
                  <input type="text" {...register("Provincia")} name="Provincia" placeholder="Provincia" required />

                  <h4 className="subtitle">DATOS DEL RESPONSABLE QUE RELLENA EL FORMULARIO</h4>
                  <input type="text"  {...register("nombre")} name="nombre" placeholder="Nombre" required />
                  <input type="text"  {...register("apellidos")} name="apellidos"  placeholder="Apellido" required />
                  <input type="email"  {...register("email")} name="email" placeholder="Correo electronico" required />
                  <input type="number"  {...register("telefono")} name="telefono" placeholder="Teléfono" required />
                  <div className="final">
                        <select name="Puesto" id="puesto" {...register("puesto")}>
                              <option value="profesor">Puesto que desempeña</option>
                              <option value="profesor">Director/a</option>
                              <option value="director">Jefe/a de estudios</option>
                              <option value="director">Profesor/a</option>
                              <option value="director">Asistente o auxiliar</option>
                              <option value="director">Psicólogo/a</option>
                              <option value="director">Secretario/a</option>
                              <option value="director">Otros</option>
                          </select>
                        
                          <div id="locationcheckbox">
                                <input type="checkbox" name="acepto" value="acepto" id="inpfinal"/>
                                <span> Acepto recibir las comunicaciones de ASEAF
                                </span>
                          </div>

                        <input type="submit" value="Enviar"/>
                  </div>
          </div>
    </form> 
  );
};

export default Form;

