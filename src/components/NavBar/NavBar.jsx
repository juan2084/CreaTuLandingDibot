import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/Logo.png";
import navBarStyle from "/src/styles/navBar.module.css";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
      <ul className={navBarStyle.enlaces}>
        <li>
          <NavLink to="/" className={navBarStyle.enlace}> 
            Inicio </NavLink> {" "}
        </li>  
        <li>
          <NavLink className={navBarStyle.enlace} to={"/Category/Vino espumante"}>Vino espumante</NavLink>{" "} 
        </li>
        <li>
          <NavLink className={navBarStyle.enlace} to={"/Category/Gran Reserva"}>Gran Reserva</NavLink>{" "}
        </li>
        <li>
          <NavLink className={navBarStyle.enlace} to={"/Category/Reserva"}>Reserva</NavLink>{" "}
        </li>
        <li>
          <NavLink className={navBarStyle.enlace} to="/">Nosotros</NavLink>
        </li>
        <li className={navBarStyle.cartWidget}>
          <NavLink to='/cart'>
            <CartWidget> </CartWidget>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
