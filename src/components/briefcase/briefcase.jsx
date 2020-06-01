import React, { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/styles/css/briefcase.css';

//images

import Robot from '../../assets/images/robot.svg';
import Skan from '../../assets/images/skan.svg';

export default class briefcaseComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerBrie">
                <div className="contentBrie">
                    <span className="text">Conoce tu portafolio</span>
                    <span className="textEst">Estrega</span>
                </div>
                <div className="contentBrieGraph">
                    <div className="containerGraphInf">
                        <div>
                            <CircularProgressbarWithChildren value={11} className="graph">
                                <img src={Robot} />
                                <strong className="textIntoGraph">RoboAdvisor</strong>
                                <strong className="textIntoGraphChild">10 Fondos</strong>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div>
                            <div className="contentInfoWithGrph">
                                <img src={Skan} className="frist" />
                                <span className="fristPorc">15%</span>
                                <div className="lineHeighBrief">
                                    <span className="twyst">FIC Old Mutual Efectivo</span>
                                </div>
                                <div>
                                    <span className="three">$240.000</span>
                                </div>
                            </div>
                            <div className="contentInfoWithGrph">
                                <div>
                                    <span className="textFristBrief">Tipo activo</span>
                                </div>
                                <div className="contentTextBrief">
                                    <span className="textFristBriefTwo">Renta fija</span>
                                    <span className="textFristBriefTwo"> Deposito a la fija</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaAngleLeft color="#817699" className="IconLeftBrie" />
                        <FaAngleRight color="#817699" className="IconRightBrie" />
                    </div>
                    <div className="footerTextBrief">
                        <span>
                            Tu dinero se invierte de la forma más eficiente de acuerdo al
                            perfil de riesgo asignado por nuestro RoboAdvisar
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}