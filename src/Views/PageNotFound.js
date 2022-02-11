import react from 'react'
import listEs from "../locales/es.json";
import "../index.css";

const NotFound = () => {
return(
    <div className="PageNotFoundStyle">
        <h3>{listEs.Errores.e404}</h3>
    </div>
    );
}

export default NotFound