import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour une meilleure navigation
import '@/styles/pages/NotFound.css'; // Créer ce fichier CSS

// Composant NotFound pour afficher la page 404
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default NotFound;