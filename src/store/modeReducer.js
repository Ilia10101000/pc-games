import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name:'mode',
    initialState:{
        mode:'light'
    },
    reducers:{
        toogleMode(state){
            return {...state, mode: state.mode === 'light'?'dark':'light'}
        }
    }
});

export const toogleMode = modeSlice.actions;
export const modeReducer = modeSlice.reducer