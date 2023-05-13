import { configureStore } from "@reduxjs/toolkit";
import OnBoardingReducer from "./slices/OnBoardingSlice"

export const store = configureStore({
    reducer:{
        OnBoarding:OnBoardingReducer
    }
})

