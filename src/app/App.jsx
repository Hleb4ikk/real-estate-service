'use client';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { useLayoutEffect, useEffect } from 'react';
import { themes } from '../shared/components/themes';
import Switch from '../shared/components/Switch/Switch.tsx';

const App = () => {
  const [theme, setTheme] = useTheme();

  function handleSwitch(value) {
    setTheme(value);
    localStorage.setItem('theme', value);
  }
  document.body.style.backgroundColor = themes[theme].background;
  document.body.style.color = themes[theme].text;

  return (
    <div className="App">
      <Switch handleSwitch={handleSwitch} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<h1>You are on the home page!</h1>}
          />
          <Route
            path="/catalog"
            element={<h1>Catalog</h1>}
          />
          <Route
            path="/registration"
            element={<h1>Registration</h1>}
          />
          <Route
            path="/login"
            element={<h1>Login</h1>}
          />
          <Route
            path="/profile"
            element={<h1>You are in profile</h1>}
          />
          <Route
            path="/application"
            element={<h1>You are in application form</h1>}
          />
          <Route
            path="/advertisements"
            element={<h1>you are in advertisements</h1>}
          />
          <Route
            path="/advertisements/:id"
            element={<h1>you are in advertisement width id</h1>}
          />
          <Route
            path="*"
            element={<h1>404</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
