import { BrowserRouter, Link } from "react-router";

function Nav() {
  return (
      <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;