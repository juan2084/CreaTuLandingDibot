import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./assets/Logo.png";
import navBarStyle from "./navBar.module.css";

export const NavBar = () => {
  return (
    <nav className={navBarStyle.navContainer}>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
      <div clasName={navBarStyle.enlaces}>
        <button> Inicio </button> <button> Nosotros </button>{" "}
        <button> Nuestros vinos </button> <button> Visitas </button>{" "}
        <button> Novedades </button> <button> Contacto </button>{" "}
      </div>{" "}
      <CartWidget> </CartWidget>{" "}
    </nav>
  );
};

export default NavBar;
