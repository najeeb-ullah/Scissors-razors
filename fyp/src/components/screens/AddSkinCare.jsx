import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar";

const AddSkinCare = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [bodyErr, setBodyErr] = useState("");
  const [quantityErr, setQuantityErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [urlErr, setUrlErr] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/addskincare", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          quantity,
          price,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            history.push("/updateskincare");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [url]);

  const postDetails = () => {
    if (!title) {
      setTitleErr("Please Enter Title");
    }
    if (!body) {
      setBodyErr("Please Enter Body");
    }
    if (!/^-?\d+\.?\d*$/.test(quantity)) {
      setQuantityErr("Invalid Quantity");
    }
    if (!/^-?\d+\.?\d*$/.test(price)) {
      setPriceErr("Invalid Price");
    }
    if (!image) {
      setUrlErr("Please Upload Image");
    } else {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "scissorsAndRazors");
      data.append("cloud_name", "najeeb777");
      fetch("https://api.cloudinary.com/v1_1/najeeb777/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
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
          Add Skin Product
        </h1>
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
            Quantity:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="Quantity"
            style={{
              marginTop: "2%",
              width: "75%",
              opacity: ".8",
            }}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              setQuantityErr("");
            }}
          />
          <div>
            <p
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "15px",
                marginLeft: "25%",
                fontWeight: "bold",
              }}
            >
              {quantityErr}
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
            Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            placeholder="Price"
            style={{
              marginTop: "2%",
              width: "75%",
              opacity: ".8",
            }}
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
                marginLeft: "25%",
                fontWeight: "bold",
              }}
            >
              {priceErr}
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
            Choose Image:&nbsp;&nbsp;
          </label>

          <input
            style={{ opacity: ".8" }}
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setUrlErr("");
            }}
          />
          <div>
            <p
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "15px",
                marginLeft: "25%",
                fontWeight: "bold",
              }}
            >
              {urlErr}
            </p>
          </div>
        </span>

        <button
          type="button"
          style={{ width: "30%", marginLeft: "35%", marginTop: "2%" }}
          className="btn btn-success btn-block"
          onClick={() => postDetails()}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddSkinCare;
