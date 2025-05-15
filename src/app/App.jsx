'use client';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';
import { routes } from '../shared/helpers/routes';
//Проблема при переходе со странички на страничку с помощью navigate не сбрасывается заголовок с помощтю функции сборщика мусора
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
