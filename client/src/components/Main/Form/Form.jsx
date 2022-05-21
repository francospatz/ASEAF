import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  // const {createPoke} = useContext(pokemonContext);
  // const [created, setPage] = useState(false);

  const onSubmit = data => {
    console.log(data,"esto es data");
    // createPoke(data);
    // setPage(true);
  };

  // if (created) {
  //   return <Navigate to='/confirmacion' />;
  //  }


  return <div className="create">
  <form onSubmit={handleSubmit(onSubmit)} className="createPokemon">
  
      <label>Email:</label>
      <input {...register("email")} required type='email'/>
   
      <label>Código Postal:</label>
      <input {...register("cp")} minLength='5' required type='number'/>

      <label>Colegios:</label>
      <select required {...register("colegios")}>
        <option value="elpilar">Nuestra señora del pilar</option>
        <option value="antoniomachado">Colegio Antonio Machado</option>
      </select>
  
      <label>Teléfono:</label>
      <input {...register("telefono")}  minLength='9' required type='number'/>
   
      <label>Provincia: </label>
      <input {...register("provincia")} required type='number'/>
   
    <input type="submit" className="btn-grad"/>
  </form>
</div>;
};

export default Form;