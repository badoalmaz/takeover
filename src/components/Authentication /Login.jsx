import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

const Login = () => {
  let authButton = {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "15px 0",
    color: "#fff",
    fontSize: "16px",
    letterSpacing: "1px",
    background: "#EC87B2",
    cursor: "pointer",
  };
  let login = {
    width: "100%",
    minHeight: "100vh",
    padding: "0 20px",
    // background: "#e9e9e9",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
    display: "flex",
  };
  let loginContainer = {
    padding: "60px",
    margin: "auto",
    width: "100%",
    maxWidth: "520px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
    // background: "rgba(1, 1, 1, .7)",
    boxShadow: "0 50px 70px -20px rgba(0, 0, 0, 0.8)",
    borderRadius: "45px",
  };
  let authLabel = {
    color: "white",
    fontFamily: '"Merienda"',
    margin: "14px 0",
    display: "block",
    fontSize: "22px",
    lineHeight: "1",
  };
  let authInput = {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "19px",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    letterSpacing: "1px",
  };
  let btnContainer = {
    width: "100%",
    padding: "24px 0",
  };
  let authP = {
    margin: "14px 0 0 0",
    textAlign: "right",
    color: "#fff",
    cursor: "pointer",
  };
  let authSpan = {
    color: "#EC87B2",
    fontWeight: "500",
    letterSpacing: "0.5px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
  };
  let errorMsg = {
    color: "#eebb4f",
    fontSize: "16px",
  };

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
  } = useAuth();

  return (
    <>
      <section style={login}>
        <div style={loginContainer}>
          <label
            style={{
              alignSelf: "center",
              color: "white",
              fontFamily: '"Merienda"',
              margin: "14px 0",
              display: "block",
              fontSize: "30px",
              lineHeight: "1",
            }}
          >
            {" "}
            Login
          </label>
          <label style={authLabel}>Username</label>
          <input
            style={authInput}
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p style={errorMsg}>{emailError}</p>
          <label style={authLabel}>Password</label>
          <input
            style={authInput}
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={errorMsg}>{passwordError}</p>
          <div style={btnContainer}>
            {hasAccount ? (
              <>
                <button style={authButton} onClick={handleLogIn}>
                  Sign in
                </button>
                <p style={authP}>
                  Don't have an account ?
                  <span
                    style={authSpan}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button style={authButton} onClick={handleSignup}>
                  Sign up
                </button>
                <p style={authP}>
                  Have an account ?
                  <span
                    style={authSpan}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
            <Link to="/forgotPassword">
              <p style={authP}>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
