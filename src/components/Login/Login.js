import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login">
      <div>
        <img
          src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
          alt=""
        />
      </div>
      <div>
        <h2>Please Login</h2>
        <button onClick={signInUsingGoogle} className="glogin">
          Login With Google
        </button>
        <Nav.Link as={HashLink} to="/elogin">
          <button className="elogin">Login with Email</button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Login;
