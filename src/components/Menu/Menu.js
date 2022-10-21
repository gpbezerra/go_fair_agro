import React from "react";
import  "./Menu.css";
import logo from "../../images/goFairAgro.png"

export const Menu = () => {
    return (
        <div className="menu">

            <div className="menuLogo">
                <a href="/Home">
                    <img src={logo} alt="" srcset="" />
                </a>
            </div>

            <div className="linkGroup">
                <a  href="#posts">
                    Publicações
                </a>
                <a  href="#cicle">
                    Ciclo de Oficinas
                </a>
                <a href="#contact">
                    Contato
                </a>
            </div>
        </div>
    )
}