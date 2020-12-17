import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";

const FaceShapeFinder = () => {
  const [shape, setShape] = useState("");
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [titleErr, setTitleErr] = useState("");
  // const [priceErr, setPriceErr] = useState("");

  const FindFaceShape = () => {
    console.log("CLICKED");
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://faceshapefinder.herokuapp.com/check",
        {
          url:
            "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/KczuiN6AYK.jpg",
        }
      )
      .then((result) => {
        console.log(result.data.result);
        setShape(result.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <NavBar />
      <div style={{ margin: "10% 20%" }}>
        <button
          type="button"
          className="btn btn-lg btn-danger"
          style={{ marginRight: "2%" }}
          onClick={() => FindFaceShape()}
        >
          Axios
        </button>
        <h1>{shape}</h1>
      </div>
    </div>
  );
};

export default FaceShapeFinder;
