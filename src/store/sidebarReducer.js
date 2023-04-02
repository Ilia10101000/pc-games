import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name:'mode',
    initialState:{
        isDark: false,
        isClose:false
    },
    reducers:{
        switchMode: (state) => {
            state.isDark = !state.isDark
        },
        toogleClose:(state)=>{
            state.isClose = !state.isClose
        }
    }
});

export const {switchMode, toogleClose} = modeSlice.actions;
export const modeReducer = modeSlice.reducer