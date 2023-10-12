import React, { useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../Firebase';
function Authdetails(props) {
    const [authuser,setuser]=useState(null);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                      setuser(user)
            }
            else{
                setuser(null);
            }
        })
    })
    return (
        <div>
            {
                authuser?alert('signed In'):alert('sign Out')
            }
        </div>
    );
}

export default Authdetails;