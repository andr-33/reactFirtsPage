import react from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.css"
import listEs from "./locales/es.json";


function App() {
  return (
    <div className="hola">
      <h1>{listEs.Titulos.App}</h1>
      <nav>
        <Link to="/home">Go Home!</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
