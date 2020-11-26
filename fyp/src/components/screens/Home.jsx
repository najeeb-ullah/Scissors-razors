import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useContext(UserContext);

  const [reviews, setReviews] = useState([]);
  let button = "";
  let text = "";

  useEffect(() => {
    fetch("/allreviews", {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      });
  }, []);

  if (!state) {
    button = (
      <Link to="/signin">
        <button type="button" className="btn btn-dark btn-lg download-button">
          Login
        </button>
      </Link>
    );
    text = "Login to Book Your Appointment Now";
  } else {
    button = (
      <Link to="/appointment">
        <button type="button" className="btn btn-dark btn-lg download-button">
          Appointment
        </button>
      </Link>
    );
    text = "Book your appointment now";
  }

  return (
    <div
      className="body-home"
      style={{ minHeight: "100vh", backgroundColor: "#f6f6f6" }}
    >
      <div className="row home-title">
        <div className="col-lg-6 col-md-12"></div>
        <div
          className="col-lg-6 col-md-12"
          style={{ textAlign: "center", color: " white" }}
        >
          <h1
            className="big-heading title-div-text"
            style={{
              marginTop: "12%",
              color: " #fff",
              fontFamily: "Lobster",
              fontWeight: "200",
            }}
          >
            <em>Get your hairstyle done by professionals.</em>
          </h1>
          <p
            className="title-div-text"
            style={{ color: "#000", fontWeight: "bold" }}
          >
            {text}
          </p>
          <div>{button}</div>
        </div>
      </div>
      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="row">
            <div className="feature-box col-lg-4">
              <i className="fas fa-check-circle fa-4x icon" />
              <h3 className="feature-title">Certified Barbers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="fas fa-bullseye fa-4x icon" />
              <h3 className="feature-title">Elite Clientele</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="fas fa-heart fa-4x icon" />
              <h3 className="feature-title">Guaranteed to work</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section
        className="color-section"
        id="testimonials"
        style={{ fontFamily: "Indie Flower", color: "#e0dede" }}
      >
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-ride="false"
        >
          <div className="carousel-inner">
            <img
              src="https://www.festfloor.eu/wp-content/uploads/2018/02/salon10.jpg"
              alt="image"
              style={{ width: "100%", height: "700px" }}
            />
            <div className="carousel-item  active container-fluid">
              <h2 className="testimonial-text" style={{ marginTop: "5%" }}>
                <em>
                  "We provide the best service in the whole town. you can check
                  the customers reviews on our website."
                </em>
              </h2>

              <em>Admin, Scissors & Razors</em>
            </div>
            {reviews.map((item) => {
              return (
                <div className="carousel-item container-fluid">
                  <h2 className="testimonial-text" style={{ marginTop: "5%" }}>
                    <em>"{item.body}"</em>
                  </h2>

                  <em>by: {item.postedBy.name}</em>
                </div>
              );
            })}

            <a
              className="carousel-control-prev"
              href="#testimonial-carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#testimonial-carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}

      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-lg-6 col-md-4">
          <p style={{ fontFamily: "Architects Daughter", padding: "5% 3% 0%" }}>
            Scissors & Razors is based in Lahore with head office in PIA Road,
            Johar Town, Lahore.
          </p>
          <p style={{ fontFamily: "Architects Daughter", padding: "5% 3% 0%" }}>
            We offer services to men. We do routine skin and hair care and also
            provide makeup and grooming services for special occasions as well
            e.g. wedding, corporate events, etc.
          </p>
          <h2
            style={{ fontFamily: "Architects Daughter", padding: "5% 3% 0%" }}
          >
            This is Scissors & Razors. This is the Grooming Solution.
          </h2>
        </div>

        <div
          className="col-lg-6 col-md-4 image-home-div"
          style={{ height: "600px" }}
        ></div>
      </div>

      {/* <section className="white-section" id="pricing">
        <h2 className="section-heading">Deals every man needs</h2>
        <p>Best deals in affordable prices</p>
        <div className="row">
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Deal 1</h2>
              </div>
              <div className="card-body">
                <h2 className="price-text">800 PKR</h2>

                <p>Hair Cut</p>
                <p>hairstyling</p>
                <p>Beard Styling</p>
                <Link to="/haircare">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Deal 2</h2>
              </div>
              <div className="card-body">
                <h2 className="price-text">1200 PKR</h2>

                <p>Face Massage</p>
                <p>Facial</p>
                <p>Face Wax</p>
                <Link to="/skincare">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-dark"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Deal 3</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">1500 PKR</h2>
                <p>Hair Cut</p>
                <p>Hair color</p>
                <p>Blowdryer</p>
                <p></p>
                <Link to="/breadcare">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-dark"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CALL TO ACTION */}

      <section className="color-section" id="cta">
        <div className="container-fluid">
          <h3
            className="big-heading"
            style={{ fontFamily: "Lobster", fontWeight: "200" }}
          >
            Download our mobile app to make an appointment anywhere anytime
          </h3>
          {/* <button type="button" className="btn btn-outline-lightbtn-lg download-button">
            <i className="fab fa-apple" />
            Download
          </button> */}
          <button type="button" className="btn btn-dark btn-lg download-button">
            <i className="fab fa-google-play" />
            Download
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
