import HomePage from '../../pages/HomePage/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import AgenciesPage from '../../pages/AgenciesPage/AgenciesPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import AuthenticationPage from '../../pages/AuthenticationPage/AuthenticationPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SubmitPage from '../../pages/SubmitPage/SubmitPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import AdvertisementPage from '../../pages/AdvertisementPage/AdvertisementPage';

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
    element: <AgenciesPage />,
  },
  {
    name: {
      ru: 'Контакты',
      en: 'Contacts',
    },
    path: '/contacts',
    element: <ContactsPage />,
  },
  {
    name: {
      ru: 'Аутентификация',
      en: 'Authentication',
    },
    path: '/auth',
    element: <AuthenticationPage />,
  },
  {
    name: {
      ru: 'Мой аккаунт',
      en: 'My account',
    },
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    name: {
      ru: 'Подача обьявления',
      en: 'Submit advertisement',
    },
    path: '/submit',
    element: <SubmitPage />,
  },
  {
    name: {
      ru: 'Обьявление',
      en: 'Advertisement',
    },
    path: '/advertisement/:id',
    element: <AdvertisementPage />,
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
