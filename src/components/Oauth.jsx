import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";
import {setActiveuser,unsetActiveuser } from '../redux/features/userSlice'
const Oauth=()=>{
    const dispatch=useDispatch();
    const {islogin,login}=useSelector((state)=>state.currentuser);

    console.log('login',login)
    function handleCallbackResponse(res){
        let cred=jwtDecode(res.credential);
        dispatch(setActiveuser({cred}));
    
    }

    function logout(){
        dispatch(unsetActiveuser(false));

    }

    useEffect(()=>{
        google.accounts.id.initialize({
            client_id:import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback:handleCallbackResponse,
            auto_select: false,
        })

     
    },[])

   

    return (

       <div>
       
        {
            islogin ? (
                <div onClick={logout} style={{cursor:"pointer",height:" 44px",width:" 202px",margin:" -2px 0px",border:" 1px solid aliceblue",borderRadius:"5px",fontSize:"1.2rem",textAlign:"center"}}>   
                            <span style={{display:"block",margin:"2px 0",color:"white"}}>Logout</span>
                </div>
            ):(
                <div onClick={()=>google.accounts.id.prompt()} style={{cursor:"pointer",height:" 44px",width:" 202px",margin:" -2px 0px",border:" 1px solid aliceblue",borderRadius:"5px",fontSize:"1.2rem",textAlign:"center"}}>   
                            <span style={{display:"block",margin:"2px 0",color:"white"}}>signin</span>
                </div>
            )
        }
        
       </div>
    )

}

export default Oauth;