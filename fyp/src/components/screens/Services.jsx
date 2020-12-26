import React from "react";

import HairServices from "../HairServices";
import BeardServices from "../BeardServices";
import SkinServices from "../SkinServices";
import Deals from "../Deals";

const Services = () => {
  return (
    <div
      className="page-background"
      style={{ minHeight: "100vh", textAlign: "center" }}
    >
      <div className="container-fluid services-div">
        <h1
          className="big-heading"
          style={{ fontFamily: "Lobster", fontWeight: "200", fontSize: "6rem" }}
        >
          Services
        </h1>
      </div>
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{
          minHeight: "90px",
          padding: "20px",
          paddingTop: "5%",
          borderBottomColor: "grey",

          fontFamily: "Lobster",
        }}
      >
        <li className="nav-item" style={{ paddingLeft: "20%" }}>
          <button
            className="btn btn-light"
            id="deal-tab"
            data-toggle="tab"
            href="#deal"
            role="tab"
            type="button"
            style={{ width: "150%" }}
          >
            <a
              href="#deal"
              className=" active"
              aria-controls="deal"
              aria-selected="true"
            >
              Deals
            </a>
          </button>
        </li>
        <li className="nav-item" style={{ paddingLeft: "5%" }}>
          <button
            className="btn btn-light"
            id="hair-tab"
            data-toggle="tab"
            href="#hair"
            role="tab"
            type="button"
            style={{ width: "150%" }}
          >
            <a className=" active" aria-controls="hair" aria-selected="false">
              Hair
            </a>
          </button>
        </li>
        <li className="nav-item" style={{ paddingLeft: "5%" }}>
          <button
            className="btn btn-light"
            id="skin-tab"
            data-toggle="tab"
            href="#skin"
            role="tab"
            type="button"
            style={{ width: "150%" }}
          >
            <a className=" active" aria-controls="skin" aria-selected="false">
              Skin
            </a>
          </button>
        </li>
        <li className="nav-item" style={{ paddingLeft: "5%" }}>
          <button
            className="btn btn-light"
            id="beard-tab"
            data-toggle="tab"
            href="#beard"
            role="tab"
            type="button"
            style={{ width: "150%" }}
          >
            <a className=" active" aria-controls="beard" aria-selected="false">
              Beard
            </a>
          </button>
        </li>
      </ul>
      <div
        className="tab-content"
        id="myTabContent"
        style={{ minHeight: "600px", marginTop: "2%" }}
      >
        <div
          className="tab-pane fade show active"
          id="deal"
          role="tabpanel"
          aria-labelledby="deal-tab"
        >
          <Deals />
        </div>
        <div
          className="tab-pane fade"
          id="hair"
          role="tabpanel"
          aria-labelledby="hair-tab"
        >
          <HairServices />
        </div>
        <div
          className="tab-pane fade"
          id="skin"
          role="tabpanel"
          aria-labelledby="skin-tab"
        >
          <SkinServices />
        </div>
        <div
          className="tab-pane fade"
          id="beard"
          role="tabpanel"
          aria-labelledby="beard-tab"
        >
          <BeardServices />
        </div>
      </div>
      {/* <div style={{ color: "white ", minHeight: "500px" }}>
        <h1>FAQ's</h1>
      </div> */}
    </div>
  );
};

export default Services;
