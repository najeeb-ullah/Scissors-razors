import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [dateOfBirthErr, setDateOfBirthErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [invalidErr, setInvalidErr] = useState("");

  const PostData = () => {
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      setNameErr("Invalid Name");
    }
    if (!dateOfBirth) {
      setDateOfBirthErr("Date Of Birth Is empty");
    }
    if (!/^-?\d+\.?\d*$/.test(contact)) {
      setContactErr("Invalid Number");
    }

    if (!password) {
      setPasswordErr("Please Enter your Password");
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailErr("Invalid Email");
      return;
    } else {
      fetch("/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          dateOfBirth,
          contact,
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setInvalidErr(data.error);
          } else {
            history.push("/signin");
          }
        });
    }
  };

  return (
    <div
      className="page-background"
      style={{ minHeight: "100vh", paddingTop: "10%", color: "white" }}
    >
      <div className="myCard auth-card-signup">
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
          Sign Up
        </h1>

        <input
          type="name"
          className="form-control border-top-0 border-left-0 border-right-0 input-field"
          placeholder="Full Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setNameErr("");
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
            {nameErr}
          </p>
        </div>
        <DatePicker
          className="form-control border-top-0 border-left-0 border-right-0 date-style"
          placeholderText="Date Of Birth"
          value={dateOfBirth}
          selected={dateOfBirth}
          onChange={(date) => {
            setDateOfBirth(date);
            setDateOfBirthErr("");
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
            {dateOfBirthErr}
          </p>
        </div>
        <input
          type="tel"
          id="phone"
          pattern="[0]{3}[0-4]{0-9}[0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
          className="form-control border-top-0 border-left-0 border-right-0"
          placeholder="Contact No (03001234567)"
          value={contact}
          onChange={(event) => {
            setContact(event.target.value);
            setContactErr("");
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
            {contactErr}
          </p>
        </div>
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
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={() => PostData()}
        >
          Sign Up
        </button>
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
        <h5>
          <Link to="/signin">Already have an acocunt?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
