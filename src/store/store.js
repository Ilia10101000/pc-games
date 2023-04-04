import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./sidebarReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";

export default configureStore({
    reducer:{
        mode: modeReducer,
        category: categoryReducer,
        product: productReducer
    }
})