'use client';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/catalog"
            element={<CatalogPage />}
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

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
