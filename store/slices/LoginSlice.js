import { createSlice } from "@reduxjs/toolkit";


const Login = createSlice({
    name:"login",  
    initialState:{
        isLogin:false,
        loginType:"signup"
    },
    reducers :{
        setLogin :(state,{payload}) =>{
            state.isLogin = payload
        },

        changeLoginType :(state,{payload})=>{
              state.loginType = payload
        }

    }
})

export const {setLogin,changeLoginType} =  Login.actions
export default Login.reducer
