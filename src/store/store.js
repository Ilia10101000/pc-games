import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./sidebarReducer";

export default configureStore({
    reducer:{
        mode: modeReducer
    }
})