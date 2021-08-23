// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContextProvider";
// import Auth from "./Auth";

// const ForgotPassword = () => {
//   let authButton = {
//     border: "none",
//     outline: "none",
//     width: "100%",
//     padding: "15px 0",
//     color: "#fff",
//     fontSize: "16px",
//     letterSpacing: "1px",
//     background: "#EC87B2",
//     cursor: "pointer",
//   };
//   let login = {
//     width: "100%",
//     minHeight: "100vh",
//     padding: "0 20px",
//     // background: "#e9e9e9",
//     backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
//     display: "flex",
//   };
//   let loginContainer = {
//     padding: "60px",
//     margin: "auto",
//     width: "100%",
//     maxWidth: "520px",
//     minHeight: "600px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
//     // background: "rgba(1, 1, 1, .7)",
//     boxShadow: "0 50px 70px -20px rgba(0, 0, 0, 0.8)",
//     borderRadius: "45px",
//   };
//   let authLabel = {
//     color: "white",
//     fontFamily: '"Merienda"',
//     margin: "14px 0",
//     display: "block",
//     fontSize: "22px",
//     lineHeight: "1",
//   };
//   let authInput = {
//     width: "100%",
//     border: "none",
//     outline: "none",
//     fontSize: "19px",
//     padding: "10px",
//     background: "rgba(255, 255, 255, 0.1)",
//     color: "#fff",
//     letterSpacing: "1px",
//   };
//   let btnContainer = {
//     width: "100%",
//     padding: "24px 0",
//   };
//   let authP = {
//     margin: "14px 0 0 0",
//     textAlign: "right",
//     color: "#fff",
//     cursor: "pointer",
//   };
//   let authSpan = {
//     color: "#EC87B2",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     marginLeft: "5px",
//     cursor: "pointer",
//     transition: "all 400ms ease-in-out",
//   };
//   let errorMsg = {
//     color: "#eebb4f",
//     fontSize: "16px",
//   };

//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogIn,
//     handleSignup,
//     hasAccount,
//     setHasAccount,
//     emailError,
//     passwordError,
//     handleLogout,
//     resetPassword,
//   } = useAuth();

//   const emailRef = useRef();
//   const { resetPassword } = useAuth();
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setMessage("");
//       setError("");
//       setLoading(true);
//       await resetPassword(emailRef.current.value);
//       setMessage("Check your inbox for further instructions");
//     } catch {
//       setError("Failed to reset password");
//     }

//     setLoading(false);
//   }

//   return (
//     <>
//       <section style={login}>
//         <div style={loginContainer}>
//           <label
//             style={{
//               alignSelf: "center",
//               color: "white",
//               fontFamily: '"Merienda"',
//               margin: "14px 0",
//               display: "block",
//               fontSize: "28px",
//               lineHeight: "1",
//             }}
//           >
//             {" "}
//             Reset Password
//           </label>
//           <label style={authLabel}>Email</label>
//           <input
//             style={authInput}
//             type="text"
//             autoFocus
//             required
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           {/* <p style={errorMsg}>{emailError}</p>
//           <label style={authLabel}>Password</label>
//           <input
//             style={authInput}
//             type="password"
//             autoFocus
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /> */}
//           <p style={errorMsg}>{passwordError}</p>
//           <div style={btnContainer}>
//             {hasAccount ? (
//               <>
//                 <button style={authButton} onClick={handleLogIn}>
//                   Sign in
//                 </button>
//                 <p style={authP}>
//                   Don't have an account ?
//                   <span
//                     style={authSpan}
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     Sign up
//                   </span>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <button style={authButton} onClick={handleSignup}>
//                   Sign up
//                 </button>
//                 <p style={authP}>
//                   Have an account ?
//                   <span
//                     style={authSpan}
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     Sign in
//                   </span>
//                 </p>
//               </>
//             )}
//             <Link to="/auth">
//               <p style={authP}>Login</p>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ForgotPassword;

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/auth">Login</Link>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </>
  );
}
