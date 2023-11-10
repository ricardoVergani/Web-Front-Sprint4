import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Erro404 from "./routes/Erro404.jsx"
import Home from './routes/Home.jsx'  
import Smartcities from './routes/Smartcities.jsx'
import Problema from './routes/Problema.jsx'
import Deveres_Individuais from './routes/Deveres_Individuais.jsx'
import Deveres_Coletivos from './routes/Deveres_Coletivos.jsx'
import Ideia from './routes/Ideia.jsx'
import Pontos_Negativos from './routes/Pontos_Negativos.jsx'
import Login from './routes/Login.jsx'
import Veiculos from './routes/Veiculos.jsx'
import Editar_Veiculo from './routes/Editar_Veiculo.jsx'
import GlobalStyle from './css/GlobalStyle.js'


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Erro404/>,
  children: [
    {
      path: '/login',
      element: <Login/>
    },
    {
      path:'/',
      element: <Home/>,
    },
    {
      path: '/veiculos',
      element: <Veiculos/>
    },
    {
      path: '/editar/veiculos/:id',
      element: <Editar_Veiculo/>
    },
    {
      path: '/smartcities',
      element: <Smartcities/>
    },
    {
      path: '/problema',
      element: <Problema/>
    },
    {
      path: '/individuais',
      element: <Deveres_Individuais/>
    },
    {
      path: '/coletivos',
      element: <Deveres_Coletivos/>
    },
    {
      path: '/ideia',
      element: <Ideia/>
    },
    {
      path: '/pontosNegativos',
      element: <Pontos_Negativos/>
    },
  ]
}])







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </React.StrictMode>,
)
