import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/allappointments", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAppointments(result);
      });
  }, []);

  const deleteAppointment = (appointmentid) => {
    fetch(`/deleteappointment/${appointmentid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = appointments.filter((item) => {
          return item._id !== result._id;
        });
        setAppointments(newData);
      });
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "black",
          fontFamily: "Lobster",
          fontSize: "3rem",
        }}
      >
        All Appointments
      </h1>
      <hr />

      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table ">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Contact No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{new Date(item.date).toLocaleDateString("en-gb")}</td>
                  <td>{item.time}</td>
                  <td>{item.postedBy.name}</td>
                  <td>0{item.postedBy.contact}</td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteAppointment(item._id)}
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

export default AllAppointments;
