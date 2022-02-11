import React from "react";
import listEs from "../locales/es.json";
import "../index.css";

const HeaderBar = () =>{
    return(
        <header className="HomeBar">
            <div id="H1-Home">
                <a href="/home">{listEs.Titulos.Home}</a>
            </div>
        </header>
    );
}

export default HeaderBar;

