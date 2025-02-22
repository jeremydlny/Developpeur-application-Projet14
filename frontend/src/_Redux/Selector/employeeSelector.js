import { createSelector } from '@reduxjs/toolkit';

// Sélecteur de base pour les employés
const selectEmployeeState = state => state.employees; 
 
// Sélecteur mémorisé pour la liste complète des employés
export const selectAllEmployees = createSelector( 
  [selectEmployeeState], 
  employeeState => employeeState.list 
);

// Sélecteur pour le filtrage des employés
export const selectFilteredEmployees = createSelector(
  [selectAllEmployees, (_, searchText) => searchText],
  (employees, searchText) => {
    if (!searchText) return employees;
    return employees.filter(/* votre logique de filtrage */);
  }
);