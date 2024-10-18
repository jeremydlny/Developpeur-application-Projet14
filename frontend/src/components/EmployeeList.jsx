import React from 'react';

const EmployeeList = () => {
  const employees = [
    { id: 1, firstName: 'John', lastName: 'Doe', department: 'Engineering' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', department: 'Marketing' },
  ];

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;