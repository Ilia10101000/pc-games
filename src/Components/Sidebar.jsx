import React from "react";
import logo from '../img/logo.png'
import {MdOutlineKeyboardArrowRight, MdProductionQuantityLimits, MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {FiHome} from 'react-icons/fi'
import {GoSearch} from 'react-icons/go'
import {BiCategoryAlt, BiLogOut} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {TbSunHigh} from 'react-icons/tb'
import {BsMoonFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { switchMode, toogleClose } from "../store/sidebarReducer";
import { NavLink } from "react-router-dom";

export default function Sidebar(){

    const dispatch = useDispatch()
    const {mode} = useSelector(state => state)

    const inputRef = React.useRef()
    function inputSelect(){
        if(mode.isClose){
            dispatch(toogleClose());
            inputRef.current.focus()
        }
    }

    return(
        <nav className={mode.isClose?'sidebar close':'sidebar'}>
            <div className="sidebar-header">
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt='logo'/>
                    </span>
                    <div className="text header-text">
                        <span className="name">Fake store</span>
                        <span className="profession">React Redux Less</span>
                    </div>
                </div>
                <span className="toogle" onClick={() => dispatch(toogleClose())}>{mode.isClose?<MdOutlineKeyboardArrowRight/>:<MdOutlineKeyboardArrowLeft/>}</span>
            </div>
            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box" onClick={inputSelect}>
                            <span className="icon"><GoSearch/></span>
                            <input ref={inputRef} type="search" placeholder="Search..." />
                    </li>
                    <ul className="menu-links">
                        <li>
                            <NavLink className='nav-link' to='/'>
                                <span className="icon"><FiHome/></span>
                                <span className="text">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='products'>
                                <span className="icon"><MdProductionQuantityLimits/></span>
                                <span className="text">Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='categories'>
                                <span className="icon"><BiCategoryAlt/></span>
                                <span className="text">Category</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='users'>
                                <span className="icon"><FaUsers/></span>
                                <span className="text">Users</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom-menu">
                    <li>
                        <div className="nav-link">
                            <span className="icon"><BiLogOut/></span>
                            <span className="text">Logout</span>
                        </div>
                    </li>
                    <li className="mode">
                            <div className="moon-sun">
                                <span className={mode.isClose?'hidden':'icon'}>{mode.isDark?<TbSunHigh/>:<BsMoonFill/>}</span>
                            </div>
                            <div className="switch-wrapper">
                                <span className="switch" onClick={()=>dispatch(switchMode())}></span>
                            </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}