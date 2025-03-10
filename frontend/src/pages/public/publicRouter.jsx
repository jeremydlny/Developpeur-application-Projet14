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
/**
 * Composant PublicRouter
 * 
 * Ce composant définit les routes publiques de l'application.
 * Il utilise le composant `Routes` de React Router pour définir les différentes routes.
 * 
 * Routes définies :
 * - `/` : Affiche le composant `CreateEmployee` avec un fallback `Loading` pendant le chargement.
 * - `/employee-list` : Affiche le composant `EmployeeList` avec un fallback `Loading` pendant le chargement.
 * - `*` : Affiche le composant `NotFound` pour toutes les autres routes (page 404).
 * 
 * @returns {JSX.Element} Les routes publiques de l'application.
 */
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