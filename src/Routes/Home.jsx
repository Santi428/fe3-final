import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import { json } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  function addFav(doctor){
    // Aqui iria la logica para agregar la Card en el localStorage
    const doc = {
      name: doctor.name,
      username: doctor.username,
      id: doctor.id
    }
    localStorage.setItem('doctor' + doctor.id, JSON.stringify(doc))
    alert('doctor agregado a favoritos')
    //Esta funcion esta hecha en GlobalContext
  }

  const {state, dispatch} = useContextGlobal()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((doc) => (
            <Card name={doc.name} username={doc.username} id={doc.id} key={doc.id}>
              <button onClick={() => dispatch({type: "ADD_FAV", payload: doc})} className="favButton">⭐</button>
            </Card>
        ))}
      </div>
    </main>
  )
}

export default Home