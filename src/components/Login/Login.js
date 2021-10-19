import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning">
        Login With Google
      </button>
      <Nav.Link as={HashLink} to="/elogin">
        Login with Email
      </Nav.Link>
    </div>
  );
};

export default Login;
