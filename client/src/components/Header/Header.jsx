import React, {useContext} from "react";
import { Link, Navigate } from 'react-router-dom';
import { LoggedContext } from "../../context/loggedContext";
import axios from 'axios';

const Header = () => {
  const { logged, setLogged, user, setUser } = useContext(LoggedContext);

  const handleLogout = async () => {
    await axios.get(`/api/logout/${user}`);
    setUser('');
    setLogged(false);
  };

  const handleLogged = () => {
    return logged ? 
    <button onClick={() => handleLogout() }>Logout</button> 
    :
    <><Link to="/"><p>Form</p></Link><Link to="/login"><p>Login</p></Link></> ;
  };

  return <div className="header">
    {handleLogged()}
  </div>;
};

export default Header;
