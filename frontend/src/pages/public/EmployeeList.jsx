import React, { useEffect } from 'react';
import EmployeeTable from '@/components/EmployeeTable';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee } from '@/_Redux/Slices/employeeSlice';

import '@/styles/pages/EmployeeList.css'; // Ajout du CSS

// Données de test avec 50 entrées
const mockData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  firstName: `Employee${index + 1}`,
  lastName: `LastName${index + 1}`,
  startDate: `2020-${(index % 12) + 1}-${(index % 28) + 1}`,
  department: ['Sales', 'Engineering', 'Marketing', 'Human Resources', 'IT'][index % 5],
  dateOfBirth: `199${index % 9}-${(index % 12) + 1}-${(index % 28) + 1}`,
  street: `${index + 100} Main St`,
  city: ['New York', 'San Francisco', 'Chicago', 'Boston', 'Seattle'][index % 5],
  state: ['NY', 'CA', 'IL', 'MA', 'WA'][index % 5],
  zipCode: `${10000 + index}`
}));

// Composant `EmployeeList` pour afficher la liste des employés
/**
 * Composant EmployeeList
 * 
 * Ce composant récupère la liste des employés depuis le store Redux et l'affiche dans un tableau.
 * Il utilise useEffect pour afficher des messages de log lors du montage, de la mise à jour et du nettoyage du composant.
 * 
 * @component
 * 
 * @returns {JSX.Element} Le composant EmployeeList
 */
const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list); // Accès direct à la liste

  useEffect(() => {
    // Ajouter les données de test au store Redux
    mockData.forEach(employee => dispatch(addEmployee(employee)));
  }, [dispatch]);

  useEffect(() => {
    console.log(`%cComponent mounted/updated at ${new Date().toLocaleTimeString()}`, 
      'color: #2196F3; font-weight: bold', 
      '\nEmployees:', employees
    );

    return () => {
      console.log(`%cComponent cleanup at ${new Date().toLocaleTimeString()}`,
        'color: #ff0000; font-weight: bold'
      );
    };
  }, [employees]);
  
  return ( // Affichage du tableau
    <div>
      <EmployeeTable data={employees} />
    </div>
  );
};

export default EmployeeList;