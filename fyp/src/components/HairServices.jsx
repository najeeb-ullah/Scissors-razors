import React, { useEffect, useState } from "react";

const HairServices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allhairservices", {
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
      return [<h1>No Deals yet</h1>];
    } else {
      return [
        data.map((item) => {
          return (
            <div className="row services-table" key={item._id}>
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
                <button type="button" class="btn btn-lg btn-secondary">
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
      <h1>Hair</h1>
      <div>{renderList()}</div>
    </div>
  );
};

export default HairServices;
