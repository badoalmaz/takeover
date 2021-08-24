import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Auth from "./Auth";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const ForgotPassword = () => {
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
    marginTop: "4vh",
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

  let errorMsg = {
    color: "#eebb4f",
    fontSize: "16px",
  };

  const { passwordError, resetPassword } = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <section style={login}>
        <div style={loginContainer}>
          <label
            style={{
              alignSelf: "center",
              color: "white",
              fontFamily: '"Merienda"',
              //   margin: "1px 0",
              display: "block",
              fontSize: "28px",
              lineHeight: "1",
            }}
          >
            {" "}
            Reset Password
          </label>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <p style={errorMsg}>{passwordError}</p>
          <div style={btnContainer}>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label style={authLabel}>Email</Form.Label>
                <Form.Control
                  style={authInput}
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Button
                style={authButton}
                disabled={loading}
                className="w-100"
                type="submit"
              >
                Reset Password
              </Button>
            </Form>

            <Link to="/auth">
              <p style={authP}>Login</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
