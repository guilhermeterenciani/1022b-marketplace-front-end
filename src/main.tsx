import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CadastroExercicio from './componentes/cadastroexercicio/CadastroExercicio.tsx'
import AlterarExercicio from './componentes/alterarexercicio/AlterarExercicio.tsx'
import Header from './componentes/header/Header.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><App /></>,
  },
  {
    path: "/cadastro-exercicio",
    element: <><Header/><CadastroExercicio/></>,
  },
  {
    path: "/alterar-exercicio/:id",
    element: <><Header/><AlterarExercicio/></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)