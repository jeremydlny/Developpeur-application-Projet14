import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '@/_Redux/Slices/employeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;