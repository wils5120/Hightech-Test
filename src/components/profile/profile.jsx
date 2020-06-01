import React, { Component } from 'react';
import '../../assets/styles/css/profile.css';
import { FaRegBell } from "react-icons/fa";
import Image from '../../assets/images/IMG.svg';


export default class ProfileComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <span className="text">Hola, Camila</span>
                    <FaRegBell className="icon" color="#54D1ED" size="25" />
                </div>
                <div className="contPanel">
                    <div className="contentInfo">
                        <div className="contImg">
                            <span className="textStra">Eres estratega</span>
                            <img src={Image} className="image" />
                        </div>
                        <div className="contentText">
                            <span className="textSald">Tu saldo</span>
                            <span className="numberSald">$1.570.000</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}