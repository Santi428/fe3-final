import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";


const Card = ({ name, username, id, children }) => {


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={"/detail/" + id}>
          <img src="/images/doctor.jpg" />
          <p>{name}</p>
          <p>{username}</p>
          <p>Matricula: {id}</p>
        </Link>
        {children}
    </div>
  );
};

export default Card;
