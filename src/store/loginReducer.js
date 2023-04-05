import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        isLogin: false,
        login:null,
        email:null,
        status:null
    },
    reducers:{
        getLogin: (state,action) => {
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isLogin = true
        },
        getLogout: (state) => {
            state.email = null;
            state.login = null;
            state.isLogin = false;
        }
    }
});

export const {getLogin, getLogout} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;