/**
 * Point d'entrée principal de l'application React.
 * 
 * - Importe les modules nécessaires de React, ReactDOM, React Router et les fichiers CSS.
 * - Utilise `createRoot` pour créer un point de montage React dans l'élément avec l'ID 'root'.
 * - Enveloppe l'application dans `StrictMode` pour activer des vérifications supplémentaires et dans `BrowserRouter` pour la gestion des routes.
 * 
 * @file /Users/Jeremy/Documents/Developer/OpenClassRooms/Developpeur-application-Projet14/frontend/src/main.jsx
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css'; // Ant Design en premier
import '@/styles/index.css';  // Styles globaux ensuite
import '@/styles/pages/CreateEmployee.css'; // Styles spécifiques après
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);