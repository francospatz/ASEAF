import React, {useState} from "react";



const Form = () => {


 
  return (
    
     <form className="formulario">
            <div className="conjunto">
            <h2 className="titulo">Participa en el Día del Pijama 2021 rellenando este formulario</h2>
            <h4 className="subtitle">DATOS DEL COLEGIO QUE SE INSCRIBE</h4>
            <input type="text" name="colegio" placeholder="Colegio" required />
            <input type="text" name="comaut"  placeholder="Comunidad Autonoma" required />
            <input type="text" name="Provincia" placeholder="Provincia" required />

            <h4 className="subtitle">DATOS DEL RESPONSABLE QUE RELLENA EL FORMULARIO</h4>
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="text" name="apellidos"  placeholder="Apellido" required />
            <input type="email" name="email" placeholder="Correo electronico" required />
            <input type="number" name="telefono" placeholder="Teléfono" required />
            <div className="final">
            <select name="Puesto" id="puesto">
                <option value="profesor">Director/a</option>
                <option value="director">Jefe/a de estudios</option>
                <option value="director">Profesor/a</option>
                <option value="director">Asistente o auxiliar</option>
                <option value="director">Psicólogo/a</option>
                <option value="director">Secretario/a</option>
                <option value="director">Otros</option>
              </select>
              
              <div className="locationcheckbox">
              <input type="checkbox" id="acepto" name="acepto" value="acepto"/>
                <label for="aseafcheck"> Acepto recibir las comunicaciones de ASEAF</label>
                </div>

              <input type="submit" value="Enviar"/>
              </div>
          </div>
    </form> 
  );
};

export default Form;

