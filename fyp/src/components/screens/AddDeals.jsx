import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar";

const AddDeal = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [bodyErr, setBodyErr] = useState("");
  const [priceErr, setPriceErr] = useState("");

  const postDetails = () => {
    if (!title) {
      setTitleErr("Please Enter Title");
    }
    if (!body) {
      setBodyErr("Please Enter Body");
    }

    if (!/^-?\d+\.?\d*$/.test(price)) {
      setPriceErr("Invalid Price");
    } else {
      fetch("/adddeal", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          price,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            history.push("/updatedeal");
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
          Add Deals
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
            Title:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="title"
            style={{ marginTop: "2%", width: "85%", opacity: ".8" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleErr("");
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
              {titleErr}
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
            Body:&nbsp;&nbsp;
          </label>
          <textarea
            rows="3"
            cols="5"
            placeholder="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setBodyErr("");
            }}
            style={{
              marginTop: "2%",

              width: "85%",
              opacity: ".8",
            }}
          ></textarea>
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
              {bodyErr}
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
            Price:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="price"
            style={{ width: "84%", opacity: ".8" }}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceErr("");
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
              {priceErr}
            </p>
          </div>
        </span>
        <button
          type="button"
          style={{ width: "30%", marginLeft: "35%", marginTop: "2%" }}
          className="btn btn-success btn-block"
          onClick={() => postDetails()}
        >
          Add Deal
        </button>
      </div>
    </div>
  );
};

export default AddDeal;
