'use client';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '../shared/helpers/routes';
import AppLayout from '../layouts/AppLayout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }) =>
            path !== '/auth' ? (
              <Route
                key={path}
                path={path}
                element={<AppLayout>{element}</AppLayout>}
              />
            ) : (
              <Route
                key={path}
                path={path}
                element={element}
              />
            ),
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
