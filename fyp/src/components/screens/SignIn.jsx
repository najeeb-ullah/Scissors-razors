import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const SignIn = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [invalidErr, setInvalidErr] = useState("");

  const PostData = () => {
    if (!password) {
      setPasswordErr("Password is Required");
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailErr("Invalid Email");
      return;
    } else {
      fetch("/signin", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            setInvalidErr(data.error);
          } else {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            dispatch({ type: "USER", payload: data.user });
            history.push("/");
          }
        });
    }
  };

  return (
    <div
      className="page-background"
      style={{ minHeight: "100vh", paddingTop: "10%", color: "white" }}
    >
      <div className="myCard ">
        <div className="form-signin auth-card input-field">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{
              textAlign: "center",
              opacity: "1",
              color: "black",
              fontFamily: "Lobster",
              fontSize: "3rem",
            }}
          >
            Sign in
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control border-top-0 border-left-0 border-right-0"
            placeholder="Email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailErr("");
            }}
            autofocus
          />

          <div>
            <p
              style={{
                color: "red",
                fontSize: "18px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              {emailErr}
            </p>
          </div>
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control border-top-0 border-left-0 border-right-0"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordErr("");
            }}
          />
          <div>
            <p
              style={{
                color: "red",
                fontSize: "18px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              {passwordErr}
            </p>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <div>
            <p
              style={{
                color: "red",
                fontSize: "18px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              {invalidErr}
            </p>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => PostData()}
          >
            Sign in
          </button>
          <h5>
            <Link to="/signup">Don't have an acocunt?</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
