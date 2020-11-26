import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/allreviews", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      });
  }, []);

  const deleteReview = (reviewid) => {
    fetch(`/deletereview/${reviewid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = reviews.filter((item) => {
          return item._id !== result._id;
        });
        setReviews(newData);
      });
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Lobster",
          fontWeight: "200",
          fontSize: "4rem",
        }}
      >
        Customers Reviews
      </h1>
      <hr />

      <div
        className="container"
        style={{ marginRight: "5%", textAlign: "center" }}
      >
        <table className="table">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Service</th>
              <th>Review</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.postedBy.name}</td>
                  <td>{item.postedBy.email}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteReview(item._id)}
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerReview;
