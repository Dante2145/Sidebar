import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

//Replace Sign Up Button with LogOut Button or Profile Stuff later. 

function Button() {
  return (
    <>
      <Link to="register">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Sign Up</span>
        </button>
      </Link>
    
      <Link to="login">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Login</span>
        </button>
      </Link>
    </>
  );
}

export default Button;