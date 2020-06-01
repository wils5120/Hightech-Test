import React, { Component } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// estilos
import '../../assets/styles/css/goal.css';

//imagenes
import Pc from '../../assets/images/pc.svg';
import Isla from '../../assets/images/isla.svg';


export default class GoalsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contentGoal">
                <div className="content">
                    <span className="text">Tus metas</span>
                    <IoMdAddCircleOutline color="#54D1ED" size="25" className="iconGoal" />
                </div>
                <div className="contentGoalTw">
                    <div className="contentGoalFrist">
                        <div className="contentImgs">
                            <img src={Isla} />
                        </div>
                        <div className="contentIsAMacLeft">
                            <span>Viaje a Islas Canarias</span>
                        </div>
                        <div className="contentGrphLeft">
                            <div>
                                <CircularProgressbar value={80} text={'20%'} className="graph" />
                            </div>
                            <div className="textWiGraphLeft">
                                <span className="moneyFri">$1.630.000</span>
                                <span className="moneyTwis">$8.000.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="contentGoalFrist">
                        <div className="contentImgs">
                            <img src={Pc} />
                        </div>
                        <div className="contentIsAMacRight">
                            Macbook Pro
                        </div>
                        <div className="contentGrphRight">
                            <div>
                                <CircularProgressbar value={99} text={'0%'} className="graph" />
                            </div>
                            <div className="textWiGraphLeft">
                                <span className="moneyFri">$0</span>
                                <span className="moneyTwis">$7.000.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}