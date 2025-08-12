import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/login", label: "Ingresar" },
];

function Nav() {

  const user = useSelector((state) => state.user);
  const location = useLocation();

  return (
      <div>
        <nav className="p-4 bg-tertiary-default">
        <ul className="flex space-x-4 mx-auto w-fit">
          {navItems.filter(item => {
            if (item.path === "/login") {
              return !user; // Show login if not logged in
            }
            return user; // Show other items if logged in
          }).map((item) => (
            <li className={`text-primary-default font-bold ${location.pathname === item.path ? 'font-bolder underline' : ''}`} key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;