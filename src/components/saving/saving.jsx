import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


//imagenes
import Vid from '../../assets/images/thumb.png';
import Vec from '../../assets/images/vec.png';

//estilos
import '../../assets/styles/css/saving.css';



export default class SavingComponent extends Component {

    render() {
        return (
            <div className="containerSaving">
                <div className="TextBoxSaving">
                    <span>Los P*t@s del ahorro</span>
                </div>
                {/*  <div>
                    <div>
                        <img src={Vid} />
                    </div>
                    <div>
                        <img src={Vec} />
                        <span>Esto es ahorro</span>
                        <span>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversiones para ti</span>
                    </div>
                </div>  */}
                <div className="mediaSaving">
                    <AwesomeSlider
                    /*  media={[
                         {
                             backgroundColor: 'transparent',
                             source: '/static/media/thumb.89f22183.png',
                             caption: 'miralooo',
                             text:'hola'
                         },
                         {
                             backgroundColor: 'transparent',
                             source: '/static/media/thumb.89f22183.png',
                             caption: "Pruena Test",
                         },
                         {
                             backgroundColor: 'transparent',
                             source: '/static/media/thumb.89f22183.png',
                             caption: "Pruena Test",
                         },
                     ]} */

                    >
                        <div className="imgStyles">
                            <img src={Vid} className="imgSt" />
                            <div className="imgSaving">
                                <img src={Vec} className="imgSt" />
                                <span className="textSaving textAhorro">Esto es AHORRO</span>
                                <span className="textSaving textRob">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversiones para ti</span>
                            </div>
                        </div>
                        <div className="imgStyles">
                            <img src={Vid} className="imgSt" />
                            <div className="imgSaving">
                                <img src={Vec} className="imgSt" />
                                <span className="textSaving textAhorro">Esto es AHORRO</span>
                                <span className="textSaving textRob">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversiones para ti</span>
                            </div>
                        </div>
                        <div className="imgStyles">
                            <img src={Vid} className="imgSt"  />
                            <div className="imgSaving">
                                <img src={Vec}  className="imgSt" />
                                <span className="textSaving textAhorro">Esto es AHORRO</span>
                                <span className="textSaving textRob">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversiones para ti</span>
                            </div>
                        </div>
                    </AwesomeSlider>
                </div>
            </div>
        )
    }
}