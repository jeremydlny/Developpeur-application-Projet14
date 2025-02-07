//EmployeeList.jsx

import React, { useEffect, useState } from 'react';
import EmployeeTable from '@/components/EmployeeTable';
import { useSelector } from 'react-redux';
import { selectAllEmployees } from '@/_Redux/selector/employeeSelector';

import '@/styles/pages/EmployeeList.css'; // Ajout du CSS

const EmployeeList = () => {
  const employees = useSelector(selectAllEmployees);

  return (
    <div>
      {/* <h1>Employee List</h1> */}
      <EmployeeTable data={employees} />
    </div>
  );
};

export default EmployeeList;