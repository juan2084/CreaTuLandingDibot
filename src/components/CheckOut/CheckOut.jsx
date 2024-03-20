import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { db }from "../../config/firebaseConfig";
import Swal from "sweetalert2";
import styles from "/src/styles/checkOut.module.css";
import { jsPDF } from "jspdf";

export const CheckOut = () => {

const {cart, total, totalItems, clearCart} = useContext(CartContext)

const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: ""
});

const [order, setOrder] = useState(null);
const [totalItemsCart, setTotalItemsCart] = useState(0);



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

    setOrder({ id: order.id, ...newOrder });

    setTotalItemsCart(totalItems);


    // Vaciar el formulario
    setFormCheckout({
        name: "",
        phone: 0, 
        email: ""
    })

    // Vaciar el carrito
    clearCart();

};

    const generarPDF = () => {
        const doc = new jsPDF();

        // Encabezado de la factura
        doc.text('Factura', 95, 20);
        doc.text(`Número de factura: ${order.id}`, 10, 30);
        doc.text(`Cliente: ${order.buyer.name}`, 10, 40);
        doc.text(`Teléfono: ${order.buyer.phone}`, 10, 50);
        doc.text(`Cantidad de productos: ${totalItemsCart}`, 10, 60);
        doc.text(`Precio Total: ${order.total}`, 10, 70);

        // Guardar el pdf con un nombre específico
        doc.save(`factura_${order.id}.pdf`);
    };


    if(order){
        return (
            <>
                <h2 className={styles.h2}>FACTURA</h2>
                <h4 className={styles.h4}>Número de factura: {order.id}</h4>
                <h4 className={styles.h4}>Cliente: {order.buyer.name}</h4>
                <h4 className={styles.h4}>Teléfono: {order.buyer.phone}</h4>
                <h4 className={styles.h4}>Cantidad de productos: {totalItemsCart}</h4>
                <h4 className={styles.h4}>Precio Total: {order.total}</h4>
                <button onClick={generarPDF}>Generar PDF</button>
            </>
    )}

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
