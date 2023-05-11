import React from 'react';
import './EspecialidadesBox.css';
import IMG2 from './images/img2.png';

function EspecialidadesBox() {

    return (

        <div className="especialidades-box">

        <div className="especialidades-content">

            <div className="img2">
                <img src={IMG2}></img>
            </div>

            <h4>
                Especialidades
            </h4>

            <h1 className="tituloEspecialidades">
                Especialidades variadas, cuidado excepcional
            </h1>

            <p className="textoEspecialidades">
            Descubra como a AngioCorpore oferece atendimento personalizado e especializado em diversas áreas da saúde.
            </p>

            <button className="especialidades">
                Ver Especialidades
            </button>


        </div>




        </div>



    );







}







export default EspecialidadesBox;