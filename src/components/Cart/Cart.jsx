import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export const Cart = () => {

const {cart, clearCart, removeItem, total} = useContext(CartContext);

  return (
    <>
        <div className="container my-4">
            {cart.map((item) => (
                <div key={item.id} className="d-flex flex-column p-3 my-2 border border-1 w-50 ">
                    <p key={item.id}>Nombre: {item.name} </p>
                    <p>Cantidad: {item.quantity} </p>
                    <p>Precio Unitario: {item.price} </p>
                    <p>Subtotal: ${item.subTotal}</p>
                    <div>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                        Eliminar
                        </button>   
                    </div>
                </div>
            ))}
        </div>
        <div className="container">
            {total > 0 ? (
            <>
            <h4> Total ${total}</h4>
            <button className="mt-3 btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
            <Link to='/checkout' className='Option'>
                <button className="mt-3 btn btn-success">Comprar</button>
            </Link>
            </>
            
            ):(
                <>
                    <h4> El carrito está vacío </h4>
                    <Link to='/' className='Option'>
                        <button>Ir a inicio</button>
                    </Link>
                </>
            )}
        </div>
    </>
  )
}


export default Cart;