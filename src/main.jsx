import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FileNotFound from './pages/FileNotFound.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <FileNotFound />
}]);



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
);
