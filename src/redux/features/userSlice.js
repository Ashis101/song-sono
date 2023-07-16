import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:{},
    islogin:false,
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setActiveuser:(state,action)=>{
            state.login=action.payload.cred;
            state.islogin=true;
        },
        unsetActiveuser:(state,action)=>{
            state.login={};
            state.islogin=action.payload;
        }
    }
})

export const {setActiveuser,unsetActiveuser}=userSlice.actions;
export default userSlice.reducer; 