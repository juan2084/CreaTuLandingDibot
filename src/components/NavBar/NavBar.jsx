import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/Logo.png";
import navBarStyle from "./navBar.module.css";
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
      <div className={navBarStyle.enlaces}>
        <Link to="/" className={navBarStyle.enlace}> 
          Inicio </Link> {" "}
        <div className="Categories">
          <NavLink className={navBarStyle.enlace} to={"/Category/Vino espumante"}>Vino espumante</NavLink>{" "} 
          <NavLink className={navBarStyle.enlace} to={"/Category/Gran Reserva"}>Gran Reserva</NavLink>{" "}
          <NavLink className={navBarStyle.enlace} to={"/Category/Reserva"}>Reserva</NavLink>{" "}
        </div>{" "}
        <div className={navBarStyle.cartWidget}>
          <CartWidget> </CartWidget>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default NavBar;
