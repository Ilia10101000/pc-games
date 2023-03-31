import React from "react";
import logo from './img/logo.png'

export default function Sidebar(){

    return(
        <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt='logo'/>
                    </span>
                    <div className="text header-text">
                        <span className="name">Fake store</span>
                        <span className="profession">React Redux Less</span>
                    </div>
                </div>
            </header>
        </nav>
    )
}