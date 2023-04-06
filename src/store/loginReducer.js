import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        isLogin: false,
        login:null,
        email:null,
        status:null,
        loginError:null,
        emailError:null
    },
    reducers:{
        setLoginError: (state, action) => {
            state.loginError = action.payload
        },
        setEmailError: (state, action) => {
            state.emailError = action.payload;
        },
        getLogin: (state,action) => {
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isLogin = true;
        },
        getLogout: (state) => {
            state.email = null;
            state.login = null;
            state.isLogin = false;
        },
        changeStatus:(state,action) => {
            state.status = action.payload
        }
    }
});

export const {getLogin, getLogout, setLoginError, setEmailError, changeStatus} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;