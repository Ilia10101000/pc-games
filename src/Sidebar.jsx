import React from "react";
import logo from './img/logo.png'
import {MdOutlineKeyboardArrowRight, MdProductionQuantityLimits} from 'react-icons/md'
import {FiHome} from 'react-icons/fi'
import {GoSearch} from 'react-icons/go'
import {BiCategoryAlt} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'

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
                <span className="toogle"><MdOutlineKeyboardArrowRight/></span>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                            <span className="icon"><GoSearch/></span>
                            <input type="search" placeholder="Search..." />
                    </li>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#">
                                <span className="icon"><FiHome/></span>
                                <span className="text nav-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <span className="icon"><MdProductionQuantityLimits/></span>
                                <span className="text nav-text">Products</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <span className="icon"><BiCategoryAlt/></span>
                                <span className="text nav-text">Category</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <span className="icon"><FaUsers/></span>
                                <span className="text nav-text">Users</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}