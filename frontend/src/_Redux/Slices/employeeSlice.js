import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({ // Création d'une tranche
  name: 'employees', 
  initialState: {
    list: [] // Utilisation d'un tableau simple
  },
  reducers: { // Ajout d'un réducteur
    addEmployee: (state, action) => { // Ajout d'un employé
      state.list.push(action.payload); // Ajout direct dans le tableau
    } 
  }
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;