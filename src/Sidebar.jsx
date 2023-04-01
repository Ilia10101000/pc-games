import React from "react";
import logo from './img/logo.png'
import {MdOutlineKeyboardArrowRight, MdProductionQuantityLimits} from 'react-icons/md'
import {FiHome} from 'react-icons/fi'
import {GoSearch} from 'react-icons/go'
import {BiCategoryAlt, BiLogOut} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {TbSunHigh} from 'react-icons/tb'
import {BsMoonFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { toogleMode } from "./store/modeReducer";

export default function Sidebar(){
    const {mode} = useSelector(state => state);
    const dispatch = useDispatch()
    console.log(mode)
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
                <div className="bottom-menu">
                    <li className="nav-link">
                        <a href="#">
                            <span className="icon"><BiLogOut/></span>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                            <div className="moon-sun">
                                <span className="icon">{mode.mode === 'light'?<BsMoonFill/>:<TbSunHigh/>}</span>
                            </div>
                            <div className="toogle-wrapper">
                                <span className="toogle" onClick={() => dispatch(toogleMode())}></span>
                            </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}
// обьсни мне на простом примере что такое замыкание в javascript