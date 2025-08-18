import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
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

  return (
      <div>
        <nav className="flex p-4 items-center bg-tertiary-default">
        <ul className="flex space-x-4 mx-auto w-fit">
          {navItems.filter(item => {
            if (item.path === "/login") {
              return !user; // Show login if not logged in
            }
            if (item.roles) {
              return user && item.roles.includes(user.roleId); // Show item if user has the required role
            }
            return true; // Show other items if logged in
          }).map((item) => (
            <li className={`text-primary-default font-bold ${location.pathname === item.path ? 'font-bolder underline' : ''}`} key={item.path}>
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