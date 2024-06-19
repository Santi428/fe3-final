import React, { useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let favs = JSON.parse(localStorage.getItem('fav'))

  if(favs == null) favs = []

  const {dispatch} = useContextGlobal()


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((doc) => (
          <Card name={doc.name} username={doc.username} id={doc.id} key={doc.id}>
            <button onClick={() => dispatch({type: "REMOVE_FAVS", payload: doc.id})} className="favButton">🚫</button>
          </Card>
        ))}

      </div>
    </>
  );
};

export default Favs;
