import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../slices/textSlice"

 const store = configureStore({
    reducer:{
        text:textSlice

    }
})
export default store