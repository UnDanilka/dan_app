import React from "react";
import Theme from "../Theme/Theme";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="links">
        <Link className="link" to="/">
          About me
        </Link>
        <Link className="link" to="/todos">
          Todos
        </Link>
        <Link className="link" to="/contacts">
          Contacts
        </Link>
      </div>
      <Theme />
    </div>
  );
};

export default Navigation;
