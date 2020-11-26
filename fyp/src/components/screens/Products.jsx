import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <section className="hair-care" id="cta">
        <div>
          <h3
            className="big-heading text-center"
            style={{ fontFamily: "Lobster", fontWeight: "200" }}
          >
            Hair Care
          </h3>
          <h3
            style={{
              fontFamily: "Architects Daughter",
              fontWeight: "600",
              lineHeight: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            ipsum nunc aliquet bibendum. Quisque sagittis purus sit amet.
          </h3>
          <div className="text-center">
            <Link to="/haircare">
              <button
                type="button"
                className="btn btn-dark btn-lg download-button"
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="white-section" id="cta">
        <div className="container-fluid">
          <h3
            className="big-heading text-center"
            style={{ fontFamily: "Lobster", fontWeight: "200" }}
          >
            Skin Care
          </h3>
          <h3
            style={{
              fontFamily: "Architects Daughter",
              fontWeight: "600",
              lineHeight: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            ipsum nunc aliquet bibendum. Quisque sagittis purus sit amet.
          </h3>
          <div className="text-center">
            <Link to="/skincare">
              <button
                type="button"
                className="btn btn-dark btn-lg download-button"
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="beard-care" id="cta">
        <div>
          <h3
            className="big-heading text-center"
            style={{ fontFamily: "Lobster", fontWeight: "200" }}
          >
            Beard Care
          </h3>
          <h3
            style={{
              fontFamily: "Architects Daughter",
              fontWeight: "600",
              lineHeight: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            ipsum nunc aliquet bibendum. Quisque sagittis purus sit amet.
          </h3>
          <div className="text-center">
            <Link to="/beardcare">
              <button
                type="button"
                className="btn btn-dark btn-lg download-button"
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
