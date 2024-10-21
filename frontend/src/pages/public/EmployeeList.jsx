import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllEmployees } from '@/_Redux/selector/employeeSelector';

const EmployeeList = () => {
  const employees = useSelector(selectAllEmployees); // Récupérer la liste des employés depuis Redux

  return (
    <div>
      <h1>Current Employees</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;