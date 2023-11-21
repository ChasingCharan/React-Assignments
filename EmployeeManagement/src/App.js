// App.js
import React from 'react';
import EmployeeList from './EmployeeList';
import AddEmployeeForm from './AddEmployeeForm';

const App = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <AddEmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default App;
