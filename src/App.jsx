import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  // employee data store
  const [employees, setEmployees] = useState([]);
  // Add Employee 
  const addEmployee=(employee)=>{
    setEmployees([...employees,employee])
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Management Dashboard</h2>
      <EmployeeForm addEmployee={addEmployee}/>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
