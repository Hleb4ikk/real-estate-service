import HomePage from '../../pages/HomePage/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export const routes = [
  {
    name: {
      ru: 'Главная',
      en: 'Home',
    },
    path: '/',
    element: <HomePage />,
  },
  {
    name: {
      ru: 'Каталог',
      en: 'Catalog',
    },
    path: '/catalog',
    element: <CatalogPage />,
  },
  {
    name: {
      ru: 'Агенства',
      en: 'Agencies',
    },
    path: '/agencies',
    element: <h1>1</h1>,
  },
  {
    name: {
      ru: 'Контакты',
      en: 'Contacts',
    },
    path: '/contacts',
    element: <h1>2</h1>,
  },
  {
    name: {
      ru: 'Аутентификация',
      en: 'Authentication',
    },
    path: '/auth',
    element: <h1>3</h1>,
  },
  {
    name: {
      ru: 'Мой аккаунт',
      en: 'My account',
    },
    path: '/profile',
    element: <h1>4</h1>,
  },
  {
    name: {
      ru: 'Подача обьявления',
      en: 'Submit advertisement',
    },
    path: '/submit',
    element: <h1>5</h1>,
  },
  {
    name: {
      ru: 'Страница не найдена',
      en: 'Page not found',
    },
    path: '*',
    element: <NotFoundPage />,
  },
];
