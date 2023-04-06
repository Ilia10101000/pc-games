import React from "react";
import {BsMoonFill} from 'react-icons/bs'
import {TbSunHigh} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../store/sidebarReducer";
import { setLoginError, setEmailError, getLogin, changeStatus} from "../store/loginReducer";
import { useNavigate } from "react-router-dom";

const emailRegValidation = new RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);

export default function Login(){

    const dispatch = useDispatch();
    const {loginError, emailError, status} = useSelector( state => state.isLogin);
    const navigate = useNavigate();
    const {isDark} = useSelector( state => state.mode)

    const [loginInputValue, setLoginInputValue] = React.useState('');
    const [emailInputValue, setEmailInputValue] = React.useState('');
    const ref= React.useRef()

    function loginValidation(value){
        if(value.trim()){
           return value.length > 8
        }
    }
    function emailValidation(value){
        if(value.trim()){
            return emailRegValidation.test(value)      
        }
    }
    function hundlerinputChange(value, validator, errorValue, errorMessage, errorDispatcher){
        if(value.trim()){
            if(!validator(value) && !errorValue){
                dispatch(errorDispatcher(errorMessage))
            } else if(validator(value) && errorValue){
                dispatch(errorDispatcher(null))
            }
        }
    }
    function submitLogin(){
        if(!emailError && !loginError && loginInputValue && emailInputValue){
            dispatch(changeStatus('loading'));
            setTimeout(() => {
                dispatch(getLogin({login:loginInputValue, email:emailInputValue}));
                dispatch(changeStatus(false));
                navigate('/',{replace:true})
            },2000)
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
                <div className={loginError?'custom-input error-input-value':'custom-input'}><input value={loginInputValue} onChange={e => setLoginInputValue(e.target.value)} onBlur={() => hundlerinputChange(loginInputValue, loginValidation, loginError, 'Login must contains not less 8 characters',setLoginError )} placeholder=" "/><span>Login</span><span ref={ref} className="error-message">{loginError}</span></div>
                <div className={emailError?'custom-input error-input-value':'custom-input'}><input value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} onBlur={() => hundlerinputChange(emailInputValue, emailValidation, emailError, 'Check your email for mistake',setEmailError )} placeholder=" "/><span>Email</span><span className="error-message">{emailError}</span></div>
                <button className="login-button" onClick={submitLogin}>Login</button>
            </div>
            {status?<div className="loader-container"><div class="lds-ripple"><div></div><div></div></div></div>:null}
        </div>
    )
}