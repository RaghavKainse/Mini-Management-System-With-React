import React from "react";

const EmployeeList = ({ employees }) => {
  console.log(employees);
  return (
    <>
      <div className="card p-3">
        <h5>Employee List</h5>
        {employees.length === 0 ? (
          <p>No Employee Added</p>
        ) : (
          employees.map((items) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              The Name of the Employee is {items.name} and age is {items.age}
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default EmployeeList;
