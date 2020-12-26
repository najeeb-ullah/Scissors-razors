import React, { useEffect, useState } from "react";

const Deals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/alldeals", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const renderList = () => {
    if (data.length === 0) {
      return [<h1>No Deals yet... Stay Tuned</h1>];
    } else {
      return [
        data.map((item) => {
          return (
            <div className="row services-table">
              <div className="col-lg-3">
                <h2>{item.title}</h2>
              </div>
              <div
                className="col-lg-6"
                style={{ textAlign: "left", fontFamily: "Architects Daughter" }}
              >
                <p>{item.body}</p>
              </div>
              <div className="col-lg-3">
                <button type="button" className="btn btn-lg btn-secondary">
                  {item.price}
                </button>
              </div>
            </div>
          );
        }),
      ];
    }
  };

  return (
    <div style={{ color: "white", fontFamily: "Lobster" }}>
      <h1>Deals</h1>
      <div>{renderList()}</div>
    </div>
  );
};

export default Deals;
