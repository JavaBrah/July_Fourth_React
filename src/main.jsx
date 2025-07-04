import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FileNotFound from './pages/FileNotFound.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import './index.css'
import App from './App.jsx'


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
  }
]);



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
);
