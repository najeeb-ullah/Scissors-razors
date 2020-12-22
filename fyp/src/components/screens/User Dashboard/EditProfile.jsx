import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserSideBar from "../../UserSideBar";
import { UserContext } from "../../../App";

const EditProfile = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  useEffect(() => {
    fetch("/userdata", {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setId(result[0]._id);
        setName(result[0].name);
        setEmail(result[0].email);
        setContact("0" + result[0].contact);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateProfile = () => {
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      setNameErr("Invalid Name");
    }

    if (!/^-?\d+\.?\d*$/.test(contact)) {
      setContactErr("Invalid Number");
    }

    if (!password) {
      setPasswordErr("Please Enter your Password");
      return;
    } else {
      fetch("/updateprofile", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          id,
          name,
          email,
          contact,
          password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          localStorage.clear();
          dispatch({ type: "CLEAR" });
          history.push("/signin");
          console.log(result);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <UserSideBar />
      <div
        className="card input-field"
        style={{
          margin: "30px auto",
          marginTop: "8%",
          maxWidth: "600px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            opacity: "1",
            color: "black",
            fontFamily: "Lobster",
            fontSize: "3rem",
          }}
        >
          Edit Profile
        </h1>
        <hr></hr>
        <span>
          <label
            style={{
              textAlign: "left",

              color: "black",
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              marginLeft: "0",
            }}
          >
            Name:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="Name"
            style={{ marginTop: "2%", width: "70%", opacity: ".8" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameErr("");
            }}
          />
          <div>
            <p
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "15px",
                marginLeft: "17%",
                fontWeight: "bold",
              }}
            >
              {nameErr}
            </p>
          </div>
        </span>
        <span>
          <label
            style={{
              textAlign: "left",

              color: "black",
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              marginLeft: "0",
            }}
          >
            Contact No:&nbsp;&nbsp;
          </label>
          <input
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setContactErr("");
            }}
            style={{
              marginTop: "2%",

              width: "62%",
              opacity: ".8",
            }}
          ></input>
          <div>
            <p
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "15px",
                marginLeft: "17%",
                fontWeight: "bold",
              }}
            >
              {contactErr}
            </p>
          </div>
        </span>
        <span>
          <label
            style={{
              textAlign: "left",

              color: "black",
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              marginLeft: "0",
            }}
          >
            Email:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="email"
            style={{ width: "71%", opacity: ".8" }}
            value={email}
            readOnly
          />
        </span>
        <span>
          <label
            style={{
              textAlign: "left",

              color: "black",
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              marginLeft: "0",
            }}
          >
            Password:&nbsp;&nbsp;
          </label>
          <input
            type="password"
            placeholder="password"
            style={{ width: "65%", opacity: ".8" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordErr("");
            }}
          />
          <div>
            <p
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "15px",
                marginLeft: "17%",
                fontWeight: "bold",
              }}
            >
              {passwordErr}
            </p>
          </div>
        </span>
        <button
          type="button"
          style={{ width: "30%", marginLeft: "35%", marginTop: "2%" }}
          className="btn btn-success btn-block"
          onClick={() => updateProfile()}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
