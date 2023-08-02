import React, { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F53%2FGoogle_%2522G%2522_Logo.svg%2F1200px-Google_%2522G%2522_Logo.svg.png&tbnid=7hjRxCFQG2QE6M&vet=12ahUKEwj3ppzbtL2AAxW5uVYBHb6aAFUQMygAegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AGoogle_%2522G%2522_Logo.svg&docid=zyZ-ciwRabX18M&w=1200&h=1224&itg=1&q=icon%20google&ved=2ahUKEwj3ppzbtL2AAxW5uVYBHb6aAFUQMygAegUIARDsAQ"
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;