import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  // console.log(addEmployee);
  const [name, setName] = useState("");
  const [age, setage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee={
      id:Date.now(),
      name,
      age
    }
    addEmployee(newEmployee)
    // clear form
    setName('')
    setage('')
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          className="form-control mb-2"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter Age"
          value={age}
          onChange={(e)=>setage(e.target.value)}
        />
        <button className="btn btn-primary w-100 mb-2">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
