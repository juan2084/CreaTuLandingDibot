import { useContext } from "react";
import carrito from "../../assets/carrito.svg"; 
import CartContext from "../../context/CartContext";

export const CartWidget = () => {

  const {totalItems} = useContext(CartContext);
  return (
    <div className="h-25">
      <img src={carrito} alt="cart-widget" />
      <strong>{totalItems}</strong>
    </div>
  );
};

export default CartWidget;
