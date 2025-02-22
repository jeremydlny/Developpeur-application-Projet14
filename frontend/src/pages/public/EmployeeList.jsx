//EmployeeList.jsx

import React from 'react';
import EmployeeTable from '@/components/EmployeeTable';
import { useSelector } from 'react-redux';

import '@/styles/pages/EmployeeList.css'; // Ajout du CSS

// Composant `EmployeeList` pour afficher la liste des employés
const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.list); // Accès direct à la liste
  
  return ( // Affichage du tableau
    <div>
      <EmployeeTable data={employees} />
    </div>
  );
};

export default EmployeeList;