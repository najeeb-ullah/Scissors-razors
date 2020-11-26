import React, { useEffect, useState } from "react";
import UserSideBar from "../../UserSideBar";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/myreviews", {
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
      <UserSideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "black",
          fontFamily: "Lobster",
          fontSize: "3rem",
        }}
      >
        Your Reviews
      </h1>
      <hr />

      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table ">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Subject</th>
              <th>Review</th>
              <th>Name</th>
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

export default MyReview;
