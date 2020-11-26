import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";

const CustomersDetail = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/allusers", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      });
  }, []);

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Lobster",
          fontWeight: "200",
          fontSize: "4rem",
        }}
      >
        Customers Information
      </h1>
      <hr />
      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Contact No.</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    {new Date(item.dateOfBirth).toLocaleDateString("en-gb")}
                  </td>
                  <td>{"0" + item.contact}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersDetail;
