import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FileNotFound from './pages/FileNotFound.jsx'
import About from './pages/About.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import Locations from './pages/Locations.jsx'


import './index.css'
import App from './App.jsx'
import LocationDetails from './pages/LocationDetails.jsx'
import CharacterDetailCard from './pages/CharacterDetailCard.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <FileNotFound />
  },
  {
    path: '/About',
    element: <About />,
    errorElement: <FileNotFound />
  },
  {
    path: '/CharacterPage',
    element: <CharacterPage />,
    errorElement: <FileNotFound />
  },
  {
    path: '/CharacterPage/:id',
    element: <CharacterDetailCard />,
    errorElement: <FileNotFound />
  },
  {
    path: '/Locations',
    element: <Locations />,
    errorElement: <FileNotFound />
  },
  {
    path: '/Locations/:id',
    element: <LocationDetails />,
    errorElement: <FileNotFound />
  },
]);



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
);
