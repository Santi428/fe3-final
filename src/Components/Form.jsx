import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const {state} = useContextGlobal()

  const [usuario, setUsuario] = useState({})

  const [showNombre, setShowNombre] = useState(false)

  const [showError, setShowError] = useState(false)

  const nombreRegex = /^(?=.*\s)[^\d]{6,}$/

  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.(com)$/

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowError(false)
    setShowNombre(false)
    if(nombreRegex.test(usuario.nombreYApellido) && emailRegex.test(usuario.email)){
      setShowNombre(true)
      toast('Datos ingresados correctamente', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: state.dark ? "dark": "light",
        });
    } else {
      setShowError(true)
    }
  } 

  

  return (
    <div>
      <form>
        <label>Nombre y Apellido</label>
          <input onChange={(e) => setUsuario({...usuario, nombreYApellido: e.target.value})} type="text"/>
        <label>Email</label>
          <input onChange={(e) => setUsuario({...usuario, email: e.target.value})} type="email" />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      {showNombre && <h2>Gracias {usuario.nombreYApellido}, te vamos a contactar lo antes posible por mail.</h2>}
      {showError && <h2>Error! Verifique la información solicitada.</h2>}
    </div>
  );
};

export default Form;
