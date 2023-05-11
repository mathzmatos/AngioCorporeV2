import React from 'react';
import './AgendamentosBox.css';
import LOCATION from './images/location.png';
import AGENDAMENTO from './images/agendamento.png';
import RESULTADOS from './images/resultados.png';


function AgendamentosBox() {

        return (

            <div className="box-agendamentos">
            
                <div className="content-agendamentos">

                    <div className="components-agendamentos">
                       <a href="#"><img class="location" src={LOCATION}></img></a> 

                        <a href="#"><h3>Unidades</h3></a>

                        <p>Localize nossas unidades com alguns clicks</p>

                       
                    </div>

                    <div className="components-agendamentos">
                        <a href="#"><img class="agendamento" src={AGENDAMENTO}></img></a>

                        <a href="#"><h3>Agendamentos</h3></a>

                        <p>Faça já seu agendamento online</p>
                    </div>

                    <div className="components-agendamentos">
                    <a href="#"><img class="resultados" src={RESULTADOS}></img></a>

                        <a href="#"><h3>Resultados Online</h3></a>

                        <p>Retire seu resultado online</p>
                    </div>

                    


                    


                </div>

            </div>




        );



}







export default AgendamentosBox;