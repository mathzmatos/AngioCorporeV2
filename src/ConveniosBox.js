import React from 'react';
import './ConveniosBox.css';
import IMG3 from './images/img3.png';



function ConveniosBox() {


    return (

        <div className="convenios-box">

    
        <div className="convenios-content">

            <div className="img3">
                <img src={IMG3}></img>
            </div>

            <h4>
                Convênios
            </h4>

            <h1 className="tituloConvenios">
            Qualidade em saúde ao seu alcance
            </h1>

            <p className="textoConvenios">
                Mais acessibilidade em saúde: conheça as opções de convênios aceitos pela AngioCorpore.
            </p>

            <button className="convenios">
                Ver Convênios
            </button>

        </div>







        </div>



    );

}







export default ConveniosBox;