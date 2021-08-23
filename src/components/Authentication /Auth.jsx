import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Homepage from "../Homepage/Homepage";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return (
    <div className="Auth">
      {user ? (
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Auth;
