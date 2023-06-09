import React from 'react';
import './ExamesBox.css';
import IMG4 from './images/img4.png';


function ExamesBox() {
    return (

        <div className="exames-box">

        <div className="exames-content">

            <div className="img4">
                <img src={IMG4}></img>
            </div>

            <h4>
                Exames e Procedimentos
            </h4>

            <h1 className="tituloExames">
                Exames e Procedimentos de Alto Nível
            </h1>

            <p className="textoExames">
                Os exames e procedimentos de alto nível são recursos importantes para diagnósticos precisos e tratamentos eficazes em diversas áreas da medicina.
            </p>


            <button className="exames">
                Ver Exames e Procedimentos
            </button>


        </div>

        </div>

    );
}







export default ExamesBox;