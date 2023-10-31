import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: 'rgb(0 0 0)',
            boxShadow: ' 0 1px 2px 0 rgb(0 0 0 / 0.1)',
            color: '#fff',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
