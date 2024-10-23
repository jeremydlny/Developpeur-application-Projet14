import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllEmployees } from '@/_Redux/selector/employeeSelector';
import EmployeeTable from '@/components/EmployeeTable'; // Import du composant EmployeeTable

const EmployeeList = () => {
  const employees = useSelector(selectAllEmployees); // Récupérer la liste des employés depuis Redux

  return (
    <div>
      <EmployeeTable data={employees} /> {/* Utilisation du tableau interactif */}
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;