import React, { useEffect, useState } from "react";
// import axios from "axios";

const FaceShapeFinder = () => {
  const [shape, setShape] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [urlErr, setUrlErr] = useState("");

  const Diamond = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond.jpg",
      title: "Diamond",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond1.jpg",
      title: "Diamond",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond2.jpg",
      title: "Diamond",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond3.jpg",
      title: "Diamond",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond4.jpg",
      title: "Diamond",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "./Hairstyles/Diamond/Diamond5.jpg",
      title: "Diamond",
    },
  ];
  const Oval = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Oval/Oval.jpg",
      title: "Oval",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Oval/Oval1.jpg",
      title: "Oval",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Oval/Oval2.jpg",
      title: "Oval",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Oval/Oval3.jpg",
      title: "Oval",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Oval/Oval4.jpg",
      title: "Oval",
    },
  ];

  const Rectangle = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle.jpg",
      title: "Rectangle",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle1.jpg",
      title: "Rectangle",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle2.jpg",
      title: "Rectangle",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle3.jpg",
      title: "Rectangle",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle4.jpg",
      title: "Rectangle",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "./Hairstyles/Rectangle/Rectangle5.jpg",
      title: "Rectangle",
    },
  ];

  const Round = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round.jpg",
      title: "Round",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round1.jpg",
      title: "Round",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round2.jpg",
      title: "Round",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round3.jpg",
      title: "Round",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round4.jpg",
      title: "Round",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "./Hairstyles/Round/Round5.jpg",
      title: "Round",
    },
  ];

  const Square = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square.jpg",
      title: "Square",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square1.jpg",
      title: "Square",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square2.jpg",
      title: "Square",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square3.jpg",
      title: "Square",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square4.jpg",
      title: "Square",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "./Hairstyles/Square/Square5.jpg",
      title: "Square",
    },
  ];

  const Triangle = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular.jpg",
      title: "Triangle",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular1.jpg",
      title: "Triangle",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular2.jpg",
      title: "Triangle",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular3.jpg",
      title: "Triangle",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular4.jpg",
      title: "Triangle",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "./Hairstyles/Triangle/Triangular5.jpg",
      title: "Triangle",
    },
  ];

  useEffect(() => {
    if (url) {
      console.log("Calculating");
      // axios
      //   .post(
      //     "https://cors-anywhere.herokuapp.com/https://faceshapefinder.herokuapp.com/check",
      //     {
      //       url:
      //         "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/KczuiN6AYK.jpg",
      //     }
      //   )
      //   .then((result) => {
      //     console.log(result.data.result);
      //     setShape(result.data.result);
      //   })
      //   .catch((e) => {
      //     console.log(e); https://cors-anywhere.herokuapp.com/
      //   });
      fetch("https://faceshapefinder.herokuapp.com/check", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            console.log(data);
            setShape(data.result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [url]);

  const findFaceShape = () => {
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
  const renderList = () => {
    if (!shape) {
      return [
        <div
          key="1"
          className="card input-field"
          style={{
            margin: "2% auto 0",
            maxWidth: "600px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "rgba(128, 128, 128, 0.3)",
            color: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              opacity: "1",
              fontFamily: "Lobster",
              fontSize: "3rem",
            }}
          >
            Upload Your Image
          </h1>

          <span>
            <label
              style={{
                textAlign: "left",
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
            onClick={() => findFaceShape()}
          >
            Find Now
          </button>
        </div>,
      ];
    } else if (shape === "Triangle") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Triangle.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    } else if (shape === "Diamond") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Diamond.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    } else if (shape === "Oval") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Oval.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    } else if (shape === "Rectangle") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Rectangle.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    } else if (shape === "Square") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Square.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    } else if (shape === "Round") {
      return [
        <div>
          <div style={{ padding: "2% 20%" }}>
            <h1 style={{ color: "white", fontFamily: "Architects Daughter" }}>
              Your Face Shape is{" "}
              <em style={{ fontFamily: "Lobster" }}>{shape}</em>
            </h1>
            <button
              type="button"
              className="btn btn-link btn-block btn-lg"
              style={{
                marginTop: "6%",
                textAlign: "center",
                fontFamily: "Architects Daughter",
                color: "green",
              }}
              onClick={() => setShape("")}
            >
              To Upload Another Image CLICK HERE
            </button>
          </div>
          <h2
            style={{
              padding: "5% 15% 10%",

              fontFamily: "Lobster",
              fontWeight: "5rem",
              fontSize: "3rem",
              color: "white",
            }}
          >
            These HairStyles will Suit you the most
          </h2>
          <div className="row">
            {Round.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  style={{ margin: "0 0 5% 0" }}
                >
                  <img
                    key={item.id}
                    style={{ width: "70%", height: "90%" }}
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>,
      ];
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", textAlign: "center" }}
      className="page-background"
    >
      <h3
        className="big-heading"
        style={{
          padding: "5% 15%",

          fontFamily: "Lobster",
          fontWeight: "5rem",
          color: "white",
        }}
      >
        <em>Find your Face Shape To Get The HairStyles Accordingly</em>
      </h3>
      <div>{renderList()}</div>
    </div>
  );
};

export default FaceShapeFinder;
