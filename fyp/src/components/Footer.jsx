import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row ">
        <div className="col-sm-4" style={{ color: "white" }}>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <div className=" footer-text">
            <Link
              to={{ pathname: "https://twitter.com/?lang=en" }}
              target="_blank"
            >
              <i className="social-icon fab fa-twitter footer-img"></i>
            </Link>
            <Link
              to={{ pathname: "https://www.facebook.com/" }}
              target="_blank"
            >
              <i className="social-icon fab fa-facebook-f footer-img"></i>
            </Link>

            <Link
              to={{ pathname: "https://www.instagram.com/" }}
              target="_blank"
            >
              <i className="social-icon fab fa-instagram footer-img"></i>
            </Link>

            <p>© Copyright 2020 Najeeb</p>
          </div>
        </div>
        <div className="col-sm-4">
          <p className="footer-text">
            Only Branch 282 PIA Main Boulevard, Block C PIA Housing Scheme,
            Lahore, Punjab 54770
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
