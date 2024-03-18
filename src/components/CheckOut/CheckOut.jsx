import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { db }from "../../config/firebaseConfig";
import Swal from "sweetalert2";

export const CheckOut = () => {

const {cart, total, clearCart} = useContext(CartContext)

const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: ""
});

const [orderId, setOrderId] = useState();

const handleName = (e) => {
    setFormCheckout({
        ...formCheckout,
        name: e.target.value
    })
}

const handlePhone = (e) => {
    setFormCheckout({
        ...formCheckout,
        phone: e.target.value
    })
}

const handleEmail = (e) => {
    setFormCheckout({
        ...formCheckout,
        email: e.target.value
    })
}

const handleSubmit = async(e) => {
    e.preventDefault()
    const newOrder = {
        buyer: formCheckout,
        items: cart,
        total, 
        date: serverTimestamp()
    }

    Swal.fire({
        icon: "success",
        title: "Su compra se realizó correctamente"
    })


    // Agrega una nueva orden de compra en Firebase
    const order = await addDoc(collection( db, "orders" ), newOrder);

  

    // Vaciar el formulario
    setFormCheckout({
        name: "",
        phone: 0, 
        email: ""
    })


    // Vaciar el carrito
    clearCart();

    // Setear la orden ID
    setOrderId(order.id);
};

    if(orderId){
        return <h3>Su ID de orden de compra es {orderId}</h3>
    }

  return (
    <div className="container d-flex justify-content-center m-5">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input type="text" className="form-control" value={formCheckout.name} onChange={handleName}/>
            <label htmlFor="">Teléfono</label>
            <input type="number" className="form-control" value={formCheckout.phone}  onChange={handlePhone}/>
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" value={formCheckout.email} onChange={handleEmail}/>
            <input type="submit" className="mt-3 btn btn-success" value="Terminar compra"/>
        </form>
    </div>
  )
}


export default CheckOut;
