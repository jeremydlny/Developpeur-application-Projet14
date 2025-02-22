import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '@/_Redux/Slices/employeeSlice';

// Création du magasin Redux avec le réducteur des employés
export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;