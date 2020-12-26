import React, { useEffect, useState } from "react";

const HairCare = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allhaircare", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div
      className="page-background"
      style={{
        minHeight: "100vh",
        textAlignLast: "center",
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className="haircare-heading ">
        <h1
          style={{
            minHeight: "300px",
            paddingTop: "9%",
            fontFamily: "Lobster",
            fontWeight: "200",
            fontSize: "6rem",
          }}
        >
          Hair Care
        </h1>
      </div>
      <div className="row">
        {data.map((item) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ marginTop: "5%" }}
            >
              <div
                className="card"
                style={{
                  width: "300px",
                  backgroundColor: "rgba(255,255,255,.8)",
                  margin: "5% 10%",
                }}
              >
                <img
                  className="card-img-top"
                  style={{ width: "100%", height: "15vw", objectFit: "cover" }}
                  src={item.photo}
                  alt={item.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text" style={{ textAlignLast: "left" }}>
                    {item.body}
                  </p>
                  <h2
                    className="card-title"
                    style={{
                      fontSize: "2rem",
                    }}
                  >
                    {item.price}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HairCare;
