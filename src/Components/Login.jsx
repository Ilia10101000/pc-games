import React from "react";
import {BsMoonFill} from 'react-icons/bs'
import {TbSunHigh} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../store/sidebarReducer";

export default function Login(){

    const dispatch = useDispatch();
    const {isDark} = useSelector(state => state.mode);

    

    return(
        <div className="login-page">
            <div className="login-mode">
                <div className="moon-sun">
                    <span className='icon'>{isDark?<TbSunHigh/>:<BsMoonFill/>}</span>
                </div>
                <div className="switch-wrapper">
                    <span className="switch" onClick={()=>dispatch(switchMode())}></span>
                </div>
            </div>
            <div className="login-welcome">Welcome to my fake store</div>
            <div className="login-form-container">
                <div className="pass-description">Please, pass register</div>
                <div className="custom-input"><input placeholder=" "/><span>Login</span><span className="error-message"></span></div>
                <div className="custom-input"><input placeholder=" "/><span>Email</span><span className="error-message"></span></div>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}