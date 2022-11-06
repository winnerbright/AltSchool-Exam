import { signInWithGoogle } from "../firebase";
import { Helmet } from "react-helmet";
import "../styles/GetStarted.css";


function GetStarted () {
  return (
    <div className="getstarted">
      <Helmet>
        <title> Start Learning </title>
        <meta name="description" contents="start learning at the comfort of your home" />
      </Helmet>
    <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
    </button>

      
    </div>
  );
}

export default GetStarted
