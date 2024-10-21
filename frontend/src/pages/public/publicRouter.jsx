import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from '@/pages/public/CreateEmployee';
import EmployeeList from '@/pages/public/EmployeeList';
import NotFound from '@/pages/public/NotFound';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} /> {/* Page par défaut */}
      <Route path="/employee-list" element={<EmployeeList />} /> {/* Liste des employés */}
      <Route path="*" element={<NotFound />} /> {/* Page 404 */}
    </Routes>
  );
};

export default PublicRouter;