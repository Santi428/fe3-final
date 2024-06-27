
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import NotFound from "./Components/NotFound";
import { routes } from "./Components/utils/routes";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {state} = useContextGlobal()

  return (
      <div className={state.dark ? "dark": ""}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.contacto} element={<Contact />}/>
            <Route path={routes.favoritos} element={<Favs />}/>
            <Route path={routes.detail} element={<Detail />}/>
            <Route path={'*'} element={<NotFound />}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
