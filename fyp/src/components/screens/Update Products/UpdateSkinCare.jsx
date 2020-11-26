import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar";

const UpdateSkinCare = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [quantityErr, setQuantityErr] = useState("");
  useEffect(() => {
    fetch("/allskincare", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const deleteSkinCare = (postid) => {
    fetch(`/deleteskincare/${postid}`, {
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

  const updateStock = (postTitle) => {
    if (!title) {
      setTitleErr("Please Select Title");
    }
    if (!/^-?\d+\.?\d*$/.test(quantity)) {
      setQuantityErr("Invalid Quantity");
    } else {
      fetch(`/updateskinstock/${postTitle}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          quantity,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          //   console.log(result)
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

  const increaseByOne = (id) => {
    fetch("/addskinstock", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
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
  };

  const decreaseByOne = (id) => {
    fetch("/decreaseskinstock", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
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
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />

      <div style={{ marginLeft: "10%", textAlign: "center" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "5%",
            fontFamily: "Lobster",
            fontWeight: "200",
            fontSize: "4rem",
          }}
        >
          Skin Care
        </h1>
        <hr />

        <div className="row services-table">
          <div className="col-lg-3" style={{ marginLeft: "2%" }}>
            <h2 style={{ fontFamily: "Lobster" }}>Update Stock</h2>
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
              placeholder="Stock"
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
                  marginLeft: "17%",

                  fontWeight: "bold",
                }}
              >
                {quantityErr}
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <button
              type="button"
              className="btn btn-md btn-warning"
              style={{ marginRight: "2%" }}
              onClick={() => updateStock(title)}
            >
              Update
            </button>
          </div>
        </div>
        <hr />

        <div className="container" style={{ marginRight: "5%" }}>
          <table className="table">
            <thead>
              <tr style={{ fontFamily: "Lobster" }}>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td
                      style={{
                        width: "20%",

                        whiteSpace: "nowrap",
                      }}
                    >
                      <img
                        src={item.photo}
                        alt={item.title}
                        style={{ width: "20%" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <p>
                        <button
                          className="btn"
                          onClick={() => increaseByOne(item._id)}
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={{ marginRight: "6%" }}
                          ></i>
                        </button>
                        {item.quantity}
                        <button
                          className="btn"
                          onClick={() => decreaseByOne(item._id)}
                        >
                          <i className="fas fa-minus-circle"></i>
                        </button>
                      </p>
                    </td>
                    <td>{item.price}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteSkinCare(item._id)}
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

export default UpdateSkinCare;
