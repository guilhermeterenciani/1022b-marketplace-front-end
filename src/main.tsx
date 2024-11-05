import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './CadastroProduto.tsx';

const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: <App />,
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)