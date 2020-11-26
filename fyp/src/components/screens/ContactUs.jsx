import React from "react";

import GoogleLocation from "../GoogleLocation";

const ContactUs = () => {
  return (
    <div
      className="page-background"
      style={{ minHeight: "100vh", backgroundColor: "#f6f6f6" }}
    >
      <div className="div-image">
        <h3
          className="big-heading"
          style={{
            padding: "7% 10%",
            paddingTop: "10%",
            fontFamily: "Lobster",
            fontWeight: "5rem",
          }}
        >
          <em> Contact Us</em>
        </h3>
      </div>

      <div className="container" style={{ padding: "5%" }}>
        <div className="row">
          <div
            className="col-lg-6"
            style={{ fontFamily: "Architects Daughter" }}
          >
            <h4 style={{ fontWeight: "900", color: "white" }}>
              Scissors@saloon.pk
            </h4>
            <h4 style={{ fontWeight: "900", color: "white" }}>0300-1234567</h4>
          </div>

          <div className="col-lg-6">
            <h5
              style={{
                fontFamily: "Architects Daughter",
                fontWeight: "900",
                color: "white",
              }}
            >
              Only Branch 282 PIA Main Boulevard, Block C PIA Housing Scheme,
              Lahore, Punjab 54770
            </h5>
          </div>
        </div>
      </div>
      {/* <h1
        className="container-fluid"
        style={{ textAlign: "center", backgroundColor: "grey" }}
      >
        Google Location
      </h1> */}
      <div style={{ marginLeft: "32%", marginTop: "5%", paddingBottom: "10%" }}>
        <GoogleLocation />
      </div>
    </div>
  );
};

export default ContactUs;
