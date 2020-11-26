import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>,

        <li>
          <Link className="nav-link active" to="/appointment">
            Appointment
          </Link>
        </li>,

        <li>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>,
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,

        <li>
          <Link className="nav-link" to="contactus">
            Contact Us
          </Link>
        </li>,
        // <li>
        //   <Link className="nav-link active" to="/admindashboard">
        //     Admin
        //   </Link>
        // </li>,
        <li>
          <Link className="nav-link active" to="/allappointments">
            Admin
          </Link>
        </li>,
        // <li>
        //   <Link className="nav-link active" to="/userdashboard">
        //     User
        //   </Link>
        // </li>,
        <li>
          <Link className="nav-link active" to="/myappointments">
            User
          </Link>
        </li>,
        <li>
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
    } else {
      return [
        <li>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>,

        <li>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>,
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,
        <li>
          <Link className="nav-link" to="contactus">
            Contact Us
          </Link>
        </li>,
        <li>
          <Link className="nav-link" to="/signin">
            {/* <button type="button" className="btn btn-sm btn-dark"> */}
            Sign In
            {/* </button> */}
          </Link>
        </li>,
        <li>
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
