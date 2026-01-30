import React, { useState,useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  // employee data store
  const [employees, setEmployees] = useState(() => {
    const savedEmployee = localStorage.getItem("employees");
    return savedEmployee ? JSON.parse(savedEmployee) : [];
  });
  // console.log(employees)

// set Item
useEffect(()=>{
  localStorage.setItem("employees",JSON.stringify(employees))
},[employees])

  // Add employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };
  // delete employee
  const deletButton = (id) => {
    // console.log(e)
    const updateList = employees.filter((emp) => emp.id !== id);
    setEmployees(updateList);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Management Dashboard</h2>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deletButton={deletButton} />
    </div>
  );
};

export default App;
