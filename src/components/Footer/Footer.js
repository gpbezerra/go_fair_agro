import React from "react";
import  "./footer.css";
import logo from "../../images/logo.png";
import face from "../../images/face.png";
import insta from "../../images/insta.png";
import link from "../../images/linkedin.png";

export const Footer = () => {
    return (
        <div className="footerContainer">
            <img style={{width: "20%"}} src={logo} alt="logo" />
            <p>Criado por PET-SI</p>
            <div className="footerSocialMedia">
                <a href="https://www.facebook.com/PetSIUFRRJ"><img src={face} alt="" /></a>
                <a href="https://www.instagram.com/petsiufrrj/?hl=en"><img src={insta} alt="" /></a>
                <a href="https://www.linkedin.com/company/pet-si-ufrrj?originalSubdomain=br"><img src={link} alt="" /></a>
            </div>
        </div>
    )
}