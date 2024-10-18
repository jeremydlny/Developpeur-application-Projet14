import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from '@/components/CreateEmployee';
import EmployeeList from '@/components/EmployeeList';
import NotFound from '@/components/NotFound';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} />  {/* Page par défaut */}
      <Route path="/employee-list" element={<EmployeeList />} />  {/* Liste des employés */}
      <Route path="*" element={<NotFound />} />  {/* Page 404 */}
    </Routes>
  );
};

export default PublicRouter;