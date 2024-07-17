import { NavLink } from "react-router-dom";
import logo from "../assets/kasa_red.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <img className="navbar__logo" src={logo} alt="logo-white" />
          <div className="navbar__links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to="/"
            >
              {" "}
              Accueil
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to="/about"
            >
              {" "}
              A Propos
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
