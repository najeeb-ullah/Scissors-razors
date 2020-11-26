import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar";

const UpdateBeardService = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  useEffect(() => {
    fetch("/allbeardservices", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const deleteBeardService = (postid) => {
    fetch(`/deletebeardservice/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };

  const updatePrice = (postTitle) => {
    if (!title) {
      setTitleErr("Please Select Title");
    }
    if (!/^-?\d+\.?\d*$/.test(price)) {
      setPriceErr("Invalid Price");
    } else {
      fetch(`/updatebeardservicePrice/${postTitle}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          price,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const newData = data.map((item) => {
            if (item._id == result._id) {
              return result;
            } else {
              return item;
            }
          });
          setData(newData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />

      <div style={{ marginLeft: "11%", textAlign: "center" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "5%",
            fontFamily: "Lobster",
            fontWeight: "200",
            fontSize: "4rem",
          }}
        >
          Beard Service
        </h1>
        <hr />

        <div className="row services-table">
          <div className="col-lg-3" style={{ marginLeft: "2%" }}>
            <h2 style={{ fontFamily: "Lobster" }}>Update Price</h2>
          </div>
          <div className="col-lg-2">
            <select
              style={{ width: "100%" }}
              onClick={(e) => {
                setTitle(e.target.value);
                setTitleErr("");
              }}
            >
              <option></option>
              {data.map((item) => {
                return (
                  <option key={item._id} value={item.title}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <div>
              <p
                style={{
                  textAlign: "left",
                  color: "red",
                  fontSize: "15px",
                  marginLeft: "17%",
                  marginTop: "5%",
                  fontWeight: "bold",
                }}
              >
                {titleErr}
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <input
              type="text"
              placeholder="Price"
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
          </div>
          <div className="col-lg-2">
            <button
              type="button"
              className="btn btn-md btn-warning"
              style={{ marginRight: "2%" }}
              onClick={() => updatePrice(title)}
            >
              Update
            </button>
          </div>
        </div>
        <hr></hr>

        <div className="container" style={{ marginRight: "5%" }}>
          <table className="table">
            <thead>
              <tr style={{ fontFamily: "Lobster" }}>
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteBeardService(item._id)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateBeardService;
