import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/Logo.png";
import navBarStyle from "/src/styles/navBar.module.css";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className={navBarStyle.enlaces}>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
          <NavLink to="/">
              <button className={navBarStyle.button}>Inicio</button> 
          </NavLink>
          <NavLink to={"/Category/Vino espumante"}>
              <button className={navBarStyle.button}>Espumante</button>
          </NavLink>
          <NavLink to={"/Category/Gran Reserva"}>
              <button className={navBarStyle.button}>Gran Reserva</button>
          </NavLink>
          <NavLink to={"/Category/Reserva"}>
              <button className={navBarStyle.button}>Reserva</button>
          </NavLink> 
          <NavLink to="/ourFamily">
              <button className={navBarStyle.button}>Nosotros</button>
          </NavLink>
          <NavLink to='/contact'>
              <button className={navBarStyle.button}>Contacto</button>
          </NavLink>
          <NavLink to='/cart' className={navBarStyle.cartWidget}>
            <CartWidget> </CartWidget>
          </NavLink>
    </nav>
  );
};

export default NavBar;
