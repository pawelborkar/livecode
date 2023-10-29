import { createBrowserRouter } from 'react-router-dom';
import { Auth, Playground } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  { path: '/playground', element: <Playground /> },
]);
