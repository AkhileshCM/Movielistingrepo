



import React, { createContext, useState } from 'react';
import './SignIncss.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

function SignIn(props) {
    const navigate=useNavigate();
    const change=props.func;
    const [user,setuser]=useState(null);
    const [password,setpassword]=useState(null);
    
    const submit=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,user,password)
        .then((usercredential)=>{
            console.log(usercredential);
            console.log('signed in');
            localStorage.setItem("log",true)
            navigate('/home');
            console.log(localStorage.getItem("log"))
           

        })
        .catch(err=>{alert('User not found please Sigin with correct credentials')
    })

    }
    // localStorage.setItem("logged",log)
    
    
   console.log(localStorage.getItem("log"))
    return (
        <div className='signinformcontainer'>
            <h2>Filmy.tv</h2>
            <form className='signinform' onSubmit={submit}>
                <input type='email' placeholder='Enter your email' value={user}
                onChange={(e)=>{
                    setuser(e.target.value);
                }}
                
                
                ></input>
                <input type='password' placeholder='Enter your password' 
                
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
                
                value={password}></input>
                <button type='submit'>LogIn</button>

            </form>
            <div className='text'><p>New to Filmy? <span onClick={change}>SignUp</span></p></div>
            
        </div>
    );
}

export default SignIn;