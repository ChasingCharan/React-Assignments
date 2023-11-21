// AddEmployeeForm.js
import React, { useState } from 'react';

const AddEmployeeForm = () => {
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', salary: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement add functionality
    console.log('Adding new employee:', newEmployee);
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newEmployee.name} onChange={handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={newEmployee.position} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={newEmployee.salary} onChange={handleChange} />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
