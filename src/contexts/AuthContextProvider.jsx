import React, { createContext, useContext, useEffect, useState } from "react";
import fire from "../../src/firebase/fire";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  // const [currentUser, setCurrentUser] = useState();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  //reset password

  function resetPassword(email) {
    const auth = fire.auth();
    return auth.sendPasswordResetEmail(email);
  }
  // function updateEmail(email) {
  //   return currentUser.updateEmail(email);
  // }
  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }
  //reset password

  const values = {
    email,
    user,
    handleLogout,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,

    resetPassword,
    // updateEmail,
    // updatePassword,
    // currentUser,
  };

  return (
    <authContext.Provider value={values}> {children}</authContext.Provider>
  );
};

export default AuthContextProvider;
