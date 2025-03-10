import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '@/_Redux/Slices/employeeSlice';

/**
 * Configuration du store Redux avec un réducteur pour les employés et des middlewares personnalisés.
 *
 * @constant {Object} store - Le store Redux configuré.
 * @property {Object} reducer - Les réducteurs utilisés dans le store.
 * @property {Function} reducer.employees - Le réducteur pour les employés.
 * @property {Function} middleware - Fonction pour obtenir les middlewares par défaut avec des options personnalisées.
 * @property {Object} middleware.serializableCheck - Options pour le contrôle de la sérialisation.
 * @property {Array<string>} middleware.serializableCheck.ignoredActions - Actions ignorées pour éviter les avertissements de sérialisation.
 * @property {Array<string>} middleware.serializableCheck.ignoredPaths - Chemins ignorés pour éviter les avertissements de sérialisation.
 * @property {boolean} devTools - Indique si les outils de développement Redux DevTools sont activés (désactivés en production).
 */
export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore ces chemins pour éviter les warnings
        ignoredActions: ['employees/addEmployee'],
        ignoredPaths: ['employees.list.dateOfBirth', 'employees.list.startDate'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;