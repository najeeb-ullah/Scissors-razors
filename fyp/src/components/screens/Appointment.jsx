import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GoogleLocation from "../GoogleLocation";

const Appointment = () => {
  const history = useHistory();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [barber, setBarber] = useState("");
  const [dateErr, setDateErr] = useState("");
  const [timeErr, setTimeErr] = useState("");
  const [bookedErr, setBookedErr] = useState("");

  const timeArray = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];
  const array2 = ["9:00 AM", "10:00 AM", "11:00 AM"];
  const barberArray = ["Nomi (Signature)", "Zeeshan", "Ali", "Munim"];

  const printDate = () => {
    let difference = time.filter((x) => !timeArray.includes(x));
    setTime(difference);
  };

  const bookAppointment = () => {
    if (!date) {
      setDateErr("Kindly select a date");
    }
    if (!time) {
      setTimeErr("Select a Time slot");
    } else {
      fetch("/bookappointment", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          date,
          barber,
          time,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            // alert(data.error);
            setBookedErr(data.error);
          } else {
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className="page-background"
      style={{ minHeight: "100vh", color: "white" }}
    >
      <div
        className="container-fluid appointment-heading"
        style={{ backgroundColor: "#898b8a" }}
      >
        <h3
          className="big-heading "
          style={{
            fontFamily: "Lobster",
            fontWeight: "200",
            fontSize: "4rem",
            paddingTop: "5%",
          }}
        >
          Book An Appointment
        </h3>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Lobster",
          fontWeight: "200",
          fontSize: "4rem",
        }}
      >
        Online Appointment
      </h1>
      <div
        style={{
          marginTop: "5%",
          textAlign: "center",
          fontFamily: "Architects Daughter",
        }}
      >
        <h5 style={{ padding: "1%" }}>Pick Date</h5>
        <DatePicker
          className="form-control border-top-0 border-left-0 border-right-0 date-style"
          placeholderText="Pick a Date"
          minDate={new Date()}
          maxDate={new Date("2025, 01, 01")}
          isClearable
          value={date}
          selected={date}
          onChange={(e) => {
            setDate(e);
            setDateErr("");
            setBookedErr("");
          }}
        />
        <div>
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {dateErr}
          </p>
        </div>
        <h5 style={{ padding: "1%" }}>Pick Barber</h5>
        <select
          style={{ width: "15%" }}
          onClick={(e) => {
            setBarber(e.target.value);
            setTimeErr("");
            setBookedErr("");
          }}
        >
          <option></option>
          {barberArray.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <h5 style={{ padding: "1%" }}>Pick Time</h5>

        <select
          style={{ width: "15%" }}
          onClick={(e) => {
            setTime(e.target.value);
            setTimeErr("");
            setBookedErr("");
          }}
        >
          <option></option>
          {timeArray.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div>
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {timeErr}
          </p>
        </div>
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          style={{ margin: "1%" }}
          onClick={() => bookAppointment()}
        >
          Book Now
        </button>
        <div>
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {bookedErr}
          </p>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Lobster",
          fontWeight: "200",
          fontSize: "4rem",
        }}
      >
        For more details please contact us at
      </h1>
      <div
        className="container"
        style={{ padding: "5%", fontFamily: "Architects Daughter" }}
      >
        <div className="row">
          <div className="col-lg-6">
            <h3>Phone Number</h3>
            <h4>0300-1234567</h4>
          </div>

          <div className="col-lg-6">
            <h3>Email</h3>
            <h4>Scissors@saloon.pk</h4>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "32%", marginTop: "5%", paddingBottom: "10%" }}>
        <GoogleLocation />
      </div>
    </div>
  );
};

export default Appointment;
