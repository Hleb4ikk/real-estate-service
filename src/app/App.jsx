'use client';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '../shared/helpers/routes';
import AppLayout from '../layouts/AppLayout';
import { UserProvider, useUser } from './providers/UserProvider';
import PrivatePage from '../pages/PrivatePage/PrivatePage';
import PublicPage from '../pages/PublicPage/PublicPage';
import { getSessionUser } from '../entities/user/user';

const App = () => {
  return (
    <UserProvider user={getSessionUser()}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element }) =>
              path === '/auth' ? (
                <Route
                  key={path}
                  path={path}
                  element={<PublicPage>{element}</PublicPage>}
                />
              ) : ['/catalog', '/agencies', '/contacts', '/advertisement/:id'].includes(path) ? (
                <Route
                  key={path}
                  path={path}
                  element={<AppLayout>{element}</AppLayout>}
                />
              ) : (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PrivatePage>
                      <AppLayout>{element}</AppLayout>
                    </PrivatePage>
                  }
                />
              ),
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default App;
