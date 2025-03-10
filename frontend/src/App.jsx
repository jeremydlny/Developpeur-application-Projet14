import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/_Redux/store';

// Lazy loading des composants
const PublicRouter = lazy(() => import('./pages/public/publicRouter'));

// Composant de chargement simple
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    Loading...
  </div>
);

/**
 * Composant principal de l'application.
 * Utilise Redux pour la gestion de l'état global et React Suspense pour le chargement asynchrone.
 *
 * @component
 * @returns {JSX.Element} Le composant App.
 */
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<LoadingFallback />}>
          <PublicRouter />
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;