
import { useState } from 'react';
import './App.css';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Authdetails from './Components/Auth/Authdetails';

function App() {
  const [logstate,setlogstate]=useState(true);
  
  const change=()=>{
    if(logstate){
      setlogstate(false);
    }
    else{
      setlogstate(true);
    }
  }
  
    if(logstate){
      return (
        <div className="App">
          
          <SignIn func={change}/>
          {/* <Authdetails/> */}
         
        </div>
      );
       }
    else{
      return (
        <div className="App">
          
          <SignUp func={change}/>
         
        </div>
      );
      
    }
  
  
}

export default App;
