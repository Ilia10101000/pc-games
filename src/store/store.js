import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./modeReducer";
import { countReducer } from "./countReducer";

export default configureStore({
    reducer:{
        mode: modeReducer,
        count: countReducer
    }
})