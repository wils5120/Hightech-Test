import React, { Component } from 'react';

//estilos
import '../../assets/styles/css/information.css';

//imagenes
import Pri from '../../assets/images/1info.svg';
import Segun from '../../assets/images/2info.svg';
import Terce from '../../assets/images/3info.svg';

export default class InformationComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containetInfor">
                <div className="contanierFristInf">
                    <div>
                        <span className="TextFristInfo">
                            10 gastos que debe evitar
                        </span>
                        <div className="contentInfoSecontInfo">
                            <span className="TextTwistInto">
                                Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Pri} />
                    </div>
                </div>
                <div className="contanierFristInf separatorSup">
                    <div>
                        <span className="TextFristInfo">
                            10 gastos que debe evitar
                        </span>
                        <div className="contentInfoSecontInfo">
                            <span className="TextTwistInto">
                                Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Segun} />
                    </div>
                </div>
                <div className="contanierFristInf separatorSup">
                    <div>
                        <span className="TextFristInfo">
                            10 gastos que debe evitar
                        </span>
                        <div className="contentInfoSecontInfo">
                            <span className="TextTwistInto">
                                Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Terce} />
                    </div>
                </div>
            </div>
        )
    }
}