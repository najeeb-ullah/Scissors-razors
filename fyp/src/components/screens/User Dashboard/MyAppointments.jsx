import React, { useEffect, useState } from "react";
import UserSideBar from "../../UserSideBar";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/myappointments", {
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
        Your Appointments
      </h1>
      <hr />

      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table ">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Date</th>
              <th>Time</th>
              <th>Stylist</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{new Date(item.date).toLocaleDateString("en-gb")}</td>
                  <td>{item.time}</td>
                  <td>{item.barber}</td>
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

export default MyAppointments;
