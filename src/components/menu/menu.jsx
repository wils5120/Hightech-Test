import React, { Component } from 'react';

// Iconos

import { FaTasks } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoMdHome } from "react-icons/io";


// Syles

import '../../assets/styles/css/menu.css';


export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action : true
        }
    }


    action = () => {
        this.setState({
            action: !this.state.action
        })
    }

    render() {
        return (
            <div className="ContentMenu">
                <div className="boxMenu" onClick={this.action}>
                    <IoMdHome className={this.state.action ?"IconMenuColorBlu" : "IconMenu"} />
                    <span className={ this.state.action ? "IconMenuColorBlu TextMenu"  : "IconMenu TextMenu" }  >Inicio</span>
                </div>
                <div className="boxMenu">
                    <FaTasks className="IconMenu" />
                    <span className="TextMenu" >Historial</span>
                </div>
                <div className="boxMenu boxplus">
                    <IoIosAddCircle className="IconMenu iconPlus" color="#54D1ED" />
                    <span className="TextMenu" >Ahorrar</span>
                </div>
                <div className="boxMenu">
                    <FaRegUserCircle className="IconMenu" />
                    <span className="TextMenu" >Mi perfil</span>
                </div>
                <div className="boxMenu">
                    <IoIosMore className="IconMenu" />
                    <span className="TextMenu" >Más</span>
                </div>
            </div>
        )
    }
}