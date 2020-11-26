import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const UserSideBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3
            style={{
              color: "white",
              fontFamily: "Grand Hotel",
              fontSize: "3rem",
            }}
          >
            Scissors & Razors
          </h3>
        </div>
        <ul className="list-unstyled components">
          <h3
            className="sidebar-header"
            style={{ fontFamily: "Architects Daughter" }}
          >
            {state ? state.name : "loading"}
          </h3>
          <li className="active">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="myappointments">My Appointments</Link>
            </li>
            <li>
              <Link to="addreview">Add Review</Link>
            </li>
            <li>
              <Link to="myreview">My Review</Link>
            </li>
            <li>
              <Link to="updateprofile">Update Profile</Link>
            </li>
            {/* 
            <a
              href="#updateProductsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              update Products
            </a>
            <ul className="collapse list-unstyled" id="updateProductsSubmenu">
              <li>
                <Link to="updatehaircare">update Hair Care</Link>
              </li>
              <li>
                <Link to="updatebeardcare">Update Beard Care</Link>
              </li>
              <li>
                <Link to="updateskincare">Update Skin Care</Link>
              </li>
            </ul> */}
          </li>
        </ul>
        <div className="sidebar-header">
          <button
            type="button"
            className="btn btn-lg btn-danger"
            style={{ color: "white" }}
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/");
            }}
          >
            Signout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserSideBar;
