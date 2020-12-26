import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const renderList = () => {
    if (state) {
      if (state.email === "scissorsandrazorz@gmail.com") {
        return [
          <li key="11">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>,
          <li key="12">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>,
          <li key="13">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>,
          <li key="14">
            <Link className="nav-link" to="/faceshapefinder">
              Face Finder
            </Link>
          </li>,

          <li key="15">
            <Link className="nav-link" to="contactus">
              Contact Us
            </Link>
          </li>,
          <li key="16">
            <Link className="nav-link active" to="/allappointments">
              Admin
            </Link>
          </li>,
          <li key="17">
            <button
              style={{ marginTop: "9%" }}
              type="button"
              className="btn btn-sm btn-dark"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/");
              }}
            >
              Signout
            </button>
          </li>,
        ];
      } else if (state.email !== "scissorsandrazorz@gmail.com") {
        return [
          <li key="21">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>,

          <li key="22">
            <Link className="nav-link active" to="/appointment">
              Appointment
            </Link>
          </li>,

          <li key="23">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>,
          <li key="24">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>,
          <li key="25">
            <Link className="nav-link" to="/faceshapefinder">
              Face Finder
            </Link>
          </li>,

          <li key="26">
            <Link className="nav-link" to="contactus">
              Contact Us
            </Link>
          </li>,

          <li key="27">
            <Link className="nav-link active" to="/myappointments">
              {state ? state.name : "loading"}
            </Link>
          </li>,
          <li key="28">
            <button
              style={{ marginTop: "9%" }}
              type="button"
              className="btn btn-sm btn-dark"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/");
              }}
            >
              Signout
            </button>
          </li>,
        ];
      }
    } else {
      return [
        <li key="1">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>,

        <li key="2">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>,
        <li key="3">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,
        <li key="4">
          <Link className="nav-link" to="/faceshapefinder">
            Face Finder
          </Link>
        </li>,
        <li key="5">
          <Link className="nav-link" to="contactus">
            Contact Us
          </Link>
        </li>,
        <li key="6">
          <Link className="nav-link" to="/signin">
            {/* <button type="button" className="btn btn-sm btn-dark"> */}
            Sign In
            {/* </button> */}
          </Link>
        </li>,
        <li key="7">
          <Link className="nav-link" to="/signup">
            {/* <button type="button" className="btn btn-sm btn-dark"> */}
            Sign Up
            {/* </button> */}
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav className="navbar  navbar-expand-sm navbar-dark bg-dark  fixed-top ">
      <Link className="navbar-brand brand-logo" to="/">
        Scissors & Razors
      </Link>
      <ul className="nav navbar-nav ml-auto">{renderList()}</ul>
    </nav>
  );
};

export default NavBar;
