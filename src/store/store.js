import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./sidebarReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { loginReducer } from "./loginReducer";

export default configureStore({
    reducer:{
        isLogin: loginReducer,
        mode: modeReducer,
        category: categoryReducer,
        product: productReducer
    }
})