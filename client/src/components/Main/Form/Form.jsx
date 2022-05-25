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
import { Autocomplete, TextField } from '@mui/material';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];


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
    //Hay que arreglar el envío del form
    const res1 = await axios.post('api/formtodb', obj);
    console.log(res1);
    const res2 = await axios.get(`api/sendemail/${obj.email}`);
    console.log(res2);
    setModal(!modal);
    //console.log(obj,"esto es obj");
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

