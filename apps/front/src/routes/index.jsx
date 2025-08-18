// src/routes/index.js
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/register';
import useAuth from '../hooks/useAuth';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import UsuarioPerfil from "../pages/UsuarioPerfil";
import UsuarioActividad from "../pages/UsuarioActividad";
import UsuarioReporte from "../pages/UsuarioReporte";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/services', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: "/perfil/:userId", element: <UsuarioPerfil /> },
  { path: "/actividad", element: <UsuarioActividad /> },
  { path: "/reporte", element: <UsuarioReporte /> },
];

const RouteConfig = () => {
  useAuth();
  return (
    <>
    <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
    </>
  );
};

export default RouteConfig;
