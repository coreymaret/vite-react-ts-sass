import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Contact from '../src/pages/Contact';
import NotFound from '../src/pages/NotFound';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/NotFound',
      element: <NotFound />,
    },
    {
        path: '',
        element: <Footer />,
    },
    {
        path: '',
        element: <NavBar />,
    },
  ]);
  
  export function Router() {
    return <RouterProvider router={router} />;
  }