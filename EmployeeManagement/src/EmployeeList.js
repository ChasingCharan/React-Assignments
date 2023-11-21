// EmployeeList.js
import React, { useState } from 'react';
import Employee from './Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 60000 },
    // Add more dummy employees as needed
  ]);

  const handleModify = (id) => {
    // Implement modify functionality
    console.log(`Modify employee with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} onModify={handleModify} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default EmployeeList;
