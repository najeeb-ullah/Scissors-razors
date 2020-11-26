import React, { useState } from "react";
// import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserSideBar from "../../UserSideBar";

const AddReview = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleErr, setTitleErr] = useState("");

  const [bodyErr, setBodyErr] = useState("");
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/customersbirthday", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setUsers(result);
  //     });
  // }, []);

  const postReview = () => {
    if (!title) {
      setTitleErr("Add Title");
    }
    if (!body) {
      setBodyErr("Add Body");
    } else {
      fetch("/addreview", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            history.push("/myappointments");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <UserSideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "black",
          fontFamily: "Lobster",
          fontSize: "3rem",
        }}
      >
        Add your review about our saloon
      </h1>
      <hr />
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
            marginTop: "5%",
            color: "black",
            fontFamily: "Lobster",
            fontSize: "3rem",
          }}
        >
          Add Review
        </h1>
        <hr></hr>

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
            placeholder="Your service"
            style={{ marginTop: "2%", opacity: ".8" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleErr("");
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
              {titleErr}
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
          rows="7"
          cols="5"
          placeholder="Write review here"
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
          onClick={() => postReview()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReview;
