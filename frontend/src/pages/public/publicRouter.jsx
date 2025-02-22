//PublicRouter.jsx

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/public/NotFound';

// Lazy loading des composants 
const CreateEmployee = lazy(() => import('./CreateEmployee'));
const EmployeeList = lazy(() => import('./EmployeeList'));

// Composant de chargement pour le lazy loading
const Loading = () => (
  <div style={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>Loading...</div>
);

// Configuration des routes publiques
const PublicRouter = () => { // Composant PublicRouter
  return ( // Routes publiques
    <Routes> 
      <Route path="/"  
        element={
          <Suspense fallback={<Loading />}>
            <CreateEmployee />
          </Suspense>
        } 
      />
      <Route 
        path="/employee-list" 
        element={
          <Suspense fallback={<Loading />}>
            <EmployeeList />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} /> {/* Page 404 */}
    </Routes>
  );
};

export default PublicRouter;