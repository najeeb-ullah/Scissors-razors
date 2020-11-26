import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const SideBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <Link to="/">
            <h3
              style={{
                color: "white",
                fontFamily: "Grand Hotel",
                fontSize: "3rem",
              }}
            >
              Scissors & Razors
            </h3>
          </Link>
        </div>
        <ul className="list-unstyled components ">
          <h2
            className="sidebar-header"
            style={{ fontFamily: "Architects Daughter" }}
          >
            Admin
          </h2>
          <li className="active">
            <a
              href="#appointmentsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Appointments
            </a>
            <ul className="collapse list-unstyled" id="appointmentsSubmenu">
              <li>
                <Link to="todayappointments">Today Appointments</Link>
              </li>
              <li>
                <Link to="allappointments">All Appointments</Link>
              </li>
            </ul>

            <a
              href="#customersdetailsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Customers
            </a>
            <ul className="collapse list-unstyled" id="customersdetailsSubmenu">
              <li>
                <Link to="customersdetail">Customers Details</Link>
              </li>
              <li>
                <Link to="customersbirthday">Birthdays</Link>
              </li>
              <li>
                <Link to="customerreviews">Customer Reviews</Link>
              </li>
            </ul>

            <a
              href="#addProductsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Add Products
            </a>
            <ul className="collapse list-unstyled" id="addProductsSubmenu">
              <li>
                <Link to="addhaircare">Add Hair Care</Link>
              </li>
              <li>
                <Link to="addbeardcare">Add Beard Care</Link>
              </li>
              <li>
                <Link to="addskincare">Add Skin Care</Link>
              </li>
            </ul>
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
            </ul>
          </li>

          <li>
            <a
              href="#addServicesSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Add Services
            </a>
            <ul className="collapse list-unstyled" id="addServicesSubmenu">
              <li>
                <Link to="adddeal">Add Deals</Link>
              </li>
              <li>
                <Link to="addhairservice">Add Hair Services</Link>
              </li>
              <li>
                <Link to="addbeardservice">Add Beard Services</Link>
              </li>
              <li>
                <Link to="addskinservice">Add Skin Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#updateServicesSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Update Services
            </a>
            <ul className="collapse list-unstyled" id="updateServicesSubmenu">
              <li>
                <Link to="updatedeal">Update Deals</Link>
              </li>
              <li>
                <Link to="updatehairservice">Update Hair Services</Link>
              </li>
              <li>
                <Link to="updatebeardservice">Update Beard Services</Link>
              </li>
              <li>
                <Link to="updateskinservice">Update Skin Services</Link>
              </li>
            </ul>
          </li>
          <li style={{ color: "white" }}>
            <Link to="sendemail">Send Email</Link>
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

export default SideBar;
