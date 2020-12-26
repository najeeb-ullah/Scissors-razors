import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar";

const AddEmployee = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [cnic, setCnic] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [cnicErr, setCnicErr] = useState("");

  const postDetails = () => {
    if (!name) {
      setNameErr("Please Enter Name");
    }
    if (!contact) {
      setContactErr("Please Enter Contact");
    }

    if (!/^-?\d+\.?\d*$/.test(cnic)) {
      setCnicErr("Invalid CNIC");
    } else {
      fetch("/addemployee", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          name,
          contact,
          cnic,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            history.push("/employee");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />
      <div
        className="card input-field"
        style={{
          margin: "30px auto",
          marginTop: "8%",
          maxWidth: "500px",
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
          Add Employee
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
            Contact:&nbsp;&nbsp;
          </label>

          <input
            type="text"
            placeholder="Contact"
            style={{ marginTop: "2%", width: "68%", opacity: ".8" }}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setContactErr("");
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
            CNIC:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="CNIC"
            style={{ marginTop: "2%", width: "72%", opacity: ".8" }}
            value={cnic}
            onChange={(e) => {
              setCnic(e.target.value);
              setCnicErr("");
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
              {cnicErr}
            </p>
          </div>
        </span>
        <button
          type="button"
          style={{ width: "30%", marginLeft: "35%", marginTop: "2%" }}
          className="btn btn-success btn-block"
          onClick={() => postDetails()}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
