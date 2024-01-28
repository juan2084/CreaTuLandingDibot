import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./assets/Logo.png";
import navBarStyle from "./navBar.module.css";

export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="cart-widget" className={navBarStyle.logo} />{" "}
      <div className={navBarStyle.enlaces}>
        <div>
          <button> Inicio </button> <button> Nosotros </button>{" "}
          <button> Nuestros vinos </button> <button> Visitas </button>{" "}
          <button> Novedades </button> <button> Contacto </button>{" "}
        </div>{" "}
        <div className={navBarStyle.cartWidget}>
          <CartWidget> </CartWidget>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default NavBar;
