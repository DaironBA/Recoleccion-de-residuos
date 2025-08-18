// src/routes/index.js
import { Route, Routes, Navigate } from 'react-router-dom';
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

// Páginas de administrador
import AdminServicios from "../pages/admin/Servicios";
import AdminPuntos from "../pages/admin/Puntos";
import AdminUsuarios from "../pages/admin/Usuarios";
import AdminRecolectores from "../pages/admin/Recolectores";
import AdminRecolecciones from "../pages/admin/Recolecciones";

// Ruta protegida para administrador
const AdminRoute = ({ children }) => {
  const { user } = useAuth(); // tu hook ya maneja usuario y rol
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
};

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/services', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: "/perfil", element: <UsuarioPerfil /> },
  { path: "/actividad", element: <UsuarioActividad /> },
  { path: "/reporte", element: <UsuarioReporte /> },

  //Rutas del administrador
  { path: "/admin/usuarios", element: <AdminRoute><AdminUsuarios /></AdminRoute> },
  { path: "/admin/recolectores", element: <AdminRoute><AdminRecolectores /></AdminRoute> },
  { path: "/admin/recolecciones", element: <AdminRoute><AdminRecolecciones /></AdminRoute> },
  { path: "/admin/servicios", element: <AdminRoute><AdminServicios /></AdminRoute> },
  { path: "/admin/puntos", element: <AdminRoute><AdminPuntos /></AdminRoute> },
];

const RouteConfig = () => {
  useAuth();
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouteConfig;
