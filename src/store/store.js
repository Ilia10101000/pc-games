import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./sidebarReducer";
import { categoryReducer } from "./categoryReducer";

export default configureStore({
    reducer:{
        mode: modeReducer,
        category: categoryReducer
    }
})