import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/allemployee", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  const deleteEmployee = (employeeid) => {
    fetch(`/deleteemployee/${employeeid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = employees.filter((item) => {
          return item._id !== result._id;
        });
        setEmployees(newData);
      });
  };

  return (
    <div className="page-background-white" style={{ minHeight: "100vh" }}>
      <SideBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "black",
          fontFamily: "Lobster",
          fontSize: "3rem",
        }}
      >
        All Employees
      </h1>
      <hr />

      <div className="container" style={{ marginRight: "5%" }}>
        <table className="table ">
          <thead>
            <tr style={{ fontFamily: "Lobster" }}>
              <th>Name</th>
              <th>Contact No</th>
              <th>CNIC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>0{item.contact}</td>
                  <td>{item.cnic}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteEmployee(item._id)}
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
