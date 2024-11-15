import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Hero.tsx"
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Clients from './pages/Clients.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';

type FutureConfigOverrides = {
  v7_startTransition: boolean;
  v7_relativeSplatPath: boolean;
  v7_fetcherPersist: boolean;
  v7_normalizeFormMethod: boolean;
  v7_partialHydration: boolean;
  v7_skipActionErrorRevalidation: boolean;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/clients", element: <Clients /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    } as FutureConfigOverrides, // Use the custom type here
  }
);




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)