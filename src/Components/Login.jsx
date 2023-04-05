import React from "react";
import {BsMoonFill} from 'react-icons/bs'
import {TbSunHigh} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../store/sidebarReducer";
import { setLoginError, setEmailError } from "../store/loginReducer";

const emailRegValidation = new RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);

export default function Login(){

    const dispatch = useDispatch();
    const {mode.isDark : isDark} = useSelector(state => state);

    const [loginInputValue, setLoginInputValue] = React.useState('');
    const [emailInputValue, setEmailInputValue] = React.useState('');

    function loginValidation(value){
        if(value.trim()){
            if(value.length < 8){
                dispatch(setLoginError('Minimal login`s value length is 8 characters'))
            } else {
                return true
            }
        }
    }
    function emailValidation(value){
        if(value.trim()){
            if(!emailRegValidation.test(value)){
                dispatch(setEmailError('Check validate your email value'))
            } else {
                return true
            }
        }
    }

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
                <div className="custom-input"><input value={loginInputValue} onChange={e => setLoginInputValue(e.target.value)} placeholder=" "/><span>Login</span><span className="error-message"></span></div>
                <div className="custom-input"><input value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} placeholder=" "/><span>Email</span><span className="error-message"></span></div>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}