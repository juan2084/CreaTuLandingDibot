import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: []
})



export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const [totalItems, setTotalItems] = useState();

    const addItem = (item, quantity) => {
        // Copio del cart
        const cartCopy = [...cart];
        // Verifico si el item ya se encuentra en el carrito 
        const index = cartCopy.findIndex(product => product.id === item.id);

        if(index != -1){
            cartCopy[index].quantity = cartCopy[index].quantity + quantity;
            cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;
            setCart(cartCopy);
        }else {
            // Si da -1 es porque el producto no se encuentra en el carrito
            
            // Armamos el objeto del item para guardar en el cart
            const newItem = {
                ...item,
                quantity,
                subTotal: item.price * quantity
            }
            setCart([...cart, newItem]);
        };
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    };

    const clearCart = () => {
        // Limpiar el carrito
        setCart([])
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    };

    const hanldeTotalItems = () => {
        const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
        setTotalItems(newTotalItems);
    }

    useEffect(() => {
        hanldeTotalItems()
    }, [cart])

    const objectValues = {
        cart, 
        totalItems,
        addItem, 
        removeItem, 
        clearCart
    };

    return (
        <CartContext.Provider value={objectValues}>
            { children }
        </CartContext.Provider>
    )

}


export default CartContext;