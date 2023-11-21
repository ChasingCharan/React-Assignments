// Employee.js
import React from 'react';

const Employee = ({ employee, onModify, onDelete }) => {
  const { id, name, position, salary } = employee;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Position: {position}</p>
      <p>Salary: {salary}</p>
      <button onClick={() => onModify(id)}>Modify</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Employee;
