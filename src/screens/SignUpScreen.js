import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert('Enter a valid email and atleast 6 letter long password to complete the sign-up process');
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert('Enter a registered email and password to sign-in');
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreenGray">New to Netflix? </span>
          <span className="signUpScreenLink" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
