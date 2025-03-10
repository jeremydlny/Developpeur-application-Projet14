import { createSelector } from '@reduxjs/toolkit';

// Sélecteur de base pour les employés
const selectEmployeeState = state => state.employees; 
 
// Sélecteur mémorisé pour la liste complète des employés
export const selectAllEmployees = createSelector( 
  [selectEmployeeState], 
  employeeState => employeeState.list 
);

// Sélecteur pour le filtrage des employés
/**
 * Sélecteur pour filtrer les employés en fonction d'un texte de recherche.
 *
 * @param {Array} employees - La liste de tous les employés.
 * @param {string} searchText - Le texte de recherche pour filtrer les employés.
 * @returns {Array} - La liste des employés filtrés en fonction du texte de recherche.
 */
export const selectFilteredEmployees = createSelector(
  [selectAllEmployees, (_, searchText) => searchText],
  (employees, searchText) => {
    if (!searchText) return employees;
    return employees.filter(/* votre logique de filtrage */);
  }
);