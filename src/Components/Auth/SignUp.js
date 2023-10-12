



import React, { useState } from 'react';
import './SignIncss.css';
import { auth } from '../../Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function SignUp(props) {

    const change=props.func;
    const [user,setuser]=useState(null);
    const [password,setpassword]=useState(null);
    const submit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,user,password)
        .then((usercredential)=>{
            console.log(usercredential);
        })
        .catch(err=>console.log(err))

    }

    return (
        <div className='signinformcontainer'>
            <h2>Welcome to Filmy.tv</h2>
            
            <form className='signinform' onSubmit={submit}>
                <input type='email' placeholder='Enter your email' value={user}
                onChange={(e)=>{
                    setuser(e.target.value);
                }}
                
                
                ></input>
                <input type='password' placeholder='Enter a password' 
                
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
                
                value={password}></input>
                <button type='submit'>SignUp</button>

            </form>
            <div className='text'><p>Already a user <span onClick={change}>LogIn</span></p></div>
            
        </div>
    );
}

export default SignUp;