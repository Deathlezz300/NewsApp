import { configureStore} from "@reduxjs/toolkit";
import { NewsSlice } from "./NewsSlice";

export const store=configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    reducer:{
        news:NewsSlice.reducer
    }
});