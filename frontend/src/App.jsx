import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/_Redux/store';
import PublicRouter from '@/pages/public/publicRouter';

const App = () => {
  return (
    <Provider store={store}>
      <PublicRouter />
    </Provider>
  );
};

export default App;