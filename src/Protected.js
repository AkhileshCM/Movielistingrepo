import { Navigate } from "react-router-dom";
const Protected = ({ isloggedin, children }) => {
    console.log('isloggedin', !isloggedin)
    if (!isloggedin) {
        console.log('not true');
      return <Navigate to="/" replace />;
    }
    console.log('true');
    return children;
  };
  export default Protected;