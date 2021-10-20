import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import "./EmailLogin.css";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function EmailLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  return (
    <div className="form">
      <img
        src="https://image.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
        alt=""
      />
      <div>
        <form onSubmit={handleRegistration}>
          <h3 className="text-danger">
            Please {isLogin ? "Login" : "Register"}
          </h3>
          {!isLogin && (
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onBlur={handleNameChange}
                  className="form-control"
                  id="inputName"
                  placeholder="Enter Name"
                />
              </div>
            </div>
          )}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                placeholder="Enter Email"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                onBlur={handlePasswordChange}
                className="form-control"
                placeholder="Enter Password"
                id="inputPassword3"
                required
              />
            </div>
          </div>

          <div className="row mb-3 text-danger">{error}</div>
          <button type="submit" className="logReg">
            {isLogin ? "Login" : "Register"}
          </button>
          <button
            type="button"
            onClick={handleResetPassword}
            // className="btn btn-secondary btn-sm"
            className="rst-btn"
          >
            Reset Password
          </button>
        </form>
        <br />
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
      {/* <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input
              onChange={toggleLogin}
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Old user? Sign In
            </label>
          </div>
        </div>
      </div> */}
      {/* fancy toggle button start------*/}

      <div className="toggle-button-cover">
        <h5>New user?</h5>
        <br />
        <div className="button-cover">
          {/* className="button-cover" */}
          <div className="button r" id="button-1">
            <input
              onChange={toggleLogin}
              type="checkbox"
              className="checkbox"
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
      {/* fancy toggle button end------*/}
    </div>
  );
}

export default EmailLogin;
