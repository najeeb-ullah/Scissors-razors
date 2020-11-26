import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar";

const CustomersBirthday = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [bodyErr, setBodyErr] = useState("");

  useEffect(() => {
    fetch("/customersbirthday", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      });
  }, []);

  const emailDetails = () => {
    if (!subject) {
      setSubjectErr("Add Subject");
    }
    if (!body) {
      setBodyErr("Add Body");
    } else {
      fetch("/birthdayemail", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          subject,
          body,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            history.push("/allappointments");
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
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginLeft: "14%",
          fontFamily: "Lobster",
          fontWeight: "200",
          fontSize: "4rem",
        }}
      >
        Customers Who have Birthday In this Month
      </h1>
      <hr />
      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table ">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Contact No.</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    {new Date(item.dateOfBirth).toLocaleDateString("en-gb")}
                  </td>
                  <td>{"0" + item.contact}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
      </div>
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
          Send Birthday Mail
        </h1>
        <hr />
        <span style={{ marginBottom: "20px", marginTop: "10px" }}>
          <label
            style={{
              textAlign: "left",

              color: "black",
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              marginLeft: "0",
            }}
          >
            Subject:&nbsp;&nbsp;
          </label>

          <input
            className="border-top-0 border-left-0 border-right-0 input-field"
            type="text"
            placeholder="Subject"
            style={{ marginTop: "2%", opacity: ".8" }}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setSubjectErr("");
            }}
          />
          <div>
            <p
              style={{
                color: "red",
                fontSize: "15px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              {subjectErr}
            </p>
          </div>
        </span>
        <label
          style={{
            textAlign: "left",

            color: "black",
            fontFamily: "Lobster",
            fontSize: "1.5rem",
            marginLeft: "0",
          }}
        >
          Body:&nbsp;&nbsp;
        </label>
        <textarea
          className=" input-field"
          rows="10"
          cols="5"
          placeholder="Body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            setBodyErr("");
          }}
          style={{ marginTop: "2%", marginBottom: "2%", opacity: ".8" }}
        ></textarea>
        <div>
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {bodyErr}
          </p>
        </div>
        <button
          type="button"
          style={{ width: "30%", marginLeft: "35%", marginTop: "2%" }}
          className="btn btn-success btn-block"
          onClick={() => {
            emailDetails();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CustomersBirthday;
