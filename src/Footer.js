import React from 'react';
import './Footer.css';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {IoMdMail, IoLogoInstagram} from 'react-icons/io';
import {FaFacebookSquare} from 'react-icons/fa';


function Footer() {
    return (

        <div className="footer">

        <div className="footer-content">

        <h1 className="contatoFooter">
            Contato
        </h1>


        <div className="telefone">
            <BsFillTelephoneFill className="telefone-icon" />

            <p>(13) 3208-0800</p>
        </div>

        <div className="email">
            <IoMdMail className="email-icon" />

            <p>angiocorpore@angiocorpore.com.br</p>
        </div>

        <div className="ResponsavelTec">
            <h1>Responsável Técnico</h1>
            <p>Dr. Marcello Romiti - CRM 56.638</p>
        </div>

        <div className="RedeSocial">
            <a href="instagram.com/angiocorpore" target="blank"><IoLogoInstagram className="instagram" /></a>
            <a href="facebook.com/angiocorpore" target="blank"><FaFacebookSquare className="facebook" /></a>
        </div>


        <p>AngioCorpore, 2023 - Todos os direitos reservados</p>

        </div>





        </div>

    );
}



export default Footer;