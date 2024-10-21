import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './Slices/employeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;