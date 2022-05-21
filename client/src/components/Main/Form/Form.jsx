import React, {useState} from "react";



const Form = () => {


 
  return (
    
     <form className="formulario">
       {/* <div className="conjunto"> */}
      <h2 className="titulo">Participa en el Día del Pijama 2021 rellenando este formulario</h2>
      <h4 className="subtitle">DATOS DEL COLEGIO QUE SE INSCRIBE</h4>
      <input type="text" name="colegio" placeholder="Colegio" required />
      <input type="text" name="comaut"  placeholder="Comunidad Autonoma" required />
      <input type="text" name="Provincia" placeholder="Provincia" required />

      <h4 className="subtitle">DATOS DEL RESPONSABLE QUE RELLENA EL FORMULARIO</h4>
      <input type="text" name="nombre" placeholder="Nombre" required />
      <input type="text" name="apellidos"  placeholder="Apellido" required />
      <input type="email" name="email" placeholder="Correo electronico" required />
      <input type="number" name="telefono" placeholder="Teléfono" required /> <br />
      <select name="Puesto" id="puesto">
          <option value="profesor">Profesor</option>
          <option value="director">Director</option>
        </select>
        
        <input type="submit" value="Enviar"/>
        {/* </div> */}
    </form> 
  );
};

export default Form;

