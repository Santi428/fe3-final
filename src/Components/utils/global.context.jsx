import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = {
  data: [],
  fav: [],
  dark: false
}

const lsFavs = JSON.parse(localStorage.getItem('fav'))

if(lsFavs != null) initialState.fav = lsFavs

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch(action.type){
    case "GET_DOC":
      return {...state, data: action.payload}
    case "ADD_FAV":
      return {...state, fav:[...state.fav, action.payload]}
    case "REMOVE_FAVS":
      const favFiltrados = state.fav.filter((i) => i.id !== action.payload )
      return {...state, fav: favFiltrados}
    case "TOGGLE_THEME":
      return {...state, dark: !dark}
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(state.fav))
  }, [state.fav])

  useEffect(() => {
    axios(url)
    .then((res) => dispatch({type: "GET_DOC", payload: res.data}))
  }, [])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}