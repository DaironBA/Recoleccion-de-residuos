import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";  // Nota: debe ser react-router-dom
import UserButton from "./UserButton";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/actividad", label: "Actividad", roles: [1] },
  { path: "/admin", label: "Administración", roles: [3] },
  { path: "/services", label: "Servicios" },
  { path: "/rutas", label: "Rutas", roles: [2] },
  { path: "/about", label: "Sobre nosotros" },
  { path: "/contact", label: "Contáctenos" },
  { path: "/login", label: "Ingresar" },
];

function Nav() {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  // Rutas donde NO se muestra "Ingresar"
  const hideLoginPaths = ["/reporte", "/perfil", "/actividad"];

  const shouldHideLogin = hideLoginPaths.some(path => location.pathname.startsWith(path));

  return (
    <div>
      <nav className="flex p-4 items-center bg-tertiary-default">
        <ul className="flex space-x-4 mx-auto w-fit">
          {navItems.filter(item => {
            if (item.path === "/login") {
              // Mostrar "Ingresar" solo si NO hay usuario y no estamos en rutas a ocultar
              return !user && !shouldHideLogin;
            }
            return true;
          }).map((item) => (
            <li
              className={`text-primary-default font-bold ${location.pathname === item.path ? 'font-bolder underline' : ''}`}
              key={item.path}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        {user && <UserButton user={user} />}
      </nav>
    </div>
  );
}

export default Nav;