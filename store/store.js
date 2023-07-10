import { configureStore } from "@reduxjs/toolkit";
import OnBoardingReducer from "./slices/OnBoardingSlice"
import LoginReducer from "./slices/LoginSlice"

export const store = configureStore({
    reducer:{
        onBoarding:OnBoardingReducer,
        login:LoginReducer
    }
})

