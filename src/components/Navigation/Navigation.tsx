import React from "react";
import Theme from "../Theme/Theme";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="links">
        <Link className="link" to="/dan_app">
          About me
        </Link>
        <Link className="link" to="/dan_app/todos">
          Todos
        </Link>
        <Link className="link" to="/dan_app/contacts">
          Contacts
        </Link>
      </div>
      <Theme />
    </div>
  );
};

export default Navigation;
