import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/Logo.png";
import navBarStyle from "/src/styles/navBar.module.css";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className={navBarStyle.enlaces}>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
          <NavLink to="/">
              <button>Inicio</button> 
          </NavLink>
          <NavLink to={"/Category/Vino espumante"}>
              <button>Vino espumante</button>
          </NavLink>
          <NavLink to={"/Category/Gran Reserva"}>
              <button>Gran Reserva</button>
          </NavLink>
          <NavLink to={"/Category/Reserva"}>
              <button>Reserva</button>
          </NavLink> 
          <NavLink to="/">
              <button>Nosotros</button>
          </NavLink>
          <NavLink to='/cart' className={navBarStyle.cartWidget}>
            <CartWidget> </CartWidget>
          </NavLink>
    </nav>
  );
};

export default NavBar;
