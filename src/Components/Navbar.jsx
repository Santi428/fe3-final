import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch} = useContextGlobal()


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contacto}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favoritos}>
        <h4>Favoritos</h4>
      </Link>
      <button onClick={() => dispatch({type: "TOGGLE_THEME"})} className='dark'>🌙</button>
    </nav>
  )
}

export default Navbar