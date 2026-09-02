import { configureStore } from "@reduxjs/toolkit"
import BookReducer from "../slices/bookslices"

export const store  = configureStore({
    reducer:{
        book:BookReducer
    }
})