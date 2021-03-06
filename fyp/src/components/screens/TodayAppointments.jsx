import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";

const TodayAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/todayappointments", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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

  const renderList = () => {
    if (appointments.length === 0) {
      return [
        <h1
          style={{
            textAlign: "center",
            marginTop: "5%",
            fontFamily: "Lobster",
            fontWeight: "200",
            fontSize: "4rem",
          }}
        >
          No Appointments Today
        </h1>,
      ];
    } else {
      appointments.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });
      // console.log(appointments);
      return [
        <div className="container" style={{ marginRight: "5%" }}>
          <table className="table">
            <thead>
              <tr style={{ fontFamily: "Lobster" }}>
                <th>Date</th>
                <th>Time</th>
                <th>Stylist</th>
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
                    <td>{item.barber}</td>
                    <td>{item.postedBy.name}</td>
                    <td>0{item.postedBy.contact}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteAppointment(item._id)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>,
      ];
    }
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
        Today Appointments
      </h1>
      <hr />
      <div>{renderList()}</div>
    </div>
  );
};

export default TodayAppointments;
