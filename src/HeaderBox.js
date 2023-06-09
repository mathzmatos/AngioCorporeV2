import React from 'react';
import './HeaderBox.css';
import IMG1 from './images/img1.png';

function HeaderBox() {

    return (
        <div className="box">

            <div className="content">

                <div className="img1">
                <img src={IMG1}></img>
                </div>

                <h1 className="tituloHeader">
                    Entregue a sua saúde nas mãos de quem é especialista
                </h1>

                <p className="textoHeader">
                Por que confiar em especialistas é essencial para prevenir doenças e garantira qualidade de vida a longo prazo.
                </p>

                

                <button className="contato">
                    Entre em contato
                </button>    


            </div>

        </div>
    );



}


export default HeaderBox;