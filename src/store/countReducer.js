import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'count',
    initialState:{
        count:0
    },
    reducers:{
        increment: function (state){
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
});

export const {increment, decrement} = countSlice.actions;
export const countReducer = countSlice.reducer;