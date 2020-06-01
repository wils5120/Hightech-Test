import React, { Component } from 'react';
import '../../assets/styles/css/inventment.css';


export default class InvetnmentComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contentInve">
                <div className="contentInveText">
                    <span className="textInve">Inversión</span>
                    <span className="valueIvent">$1.600.000</span>
                </div>
                <div className="contentInveText">
                    <span className="textInve">Rendimiento</span>
                    <span className="valueIvent">-$30.000</span>
                </div>
            </div>
        )
    }
}