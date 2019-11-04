import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import './assets/common';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import Routes from './routes';
import { from } from 'rxjs';
const App = () => {
  return (
    <div className="wrapper ">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
