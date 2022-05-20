import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
    <Link to="/"><p>Form</p></Link>
    <Link to="/login"><p>Login</p></Link>
  </div>;
};

export default Header;
