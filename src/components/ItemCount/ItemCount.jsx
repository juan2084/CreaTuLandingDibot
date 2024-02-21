import { useState } from "react";
import ItemCountStyle from "/src/styles/itemCount.module.css"

 export const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
      if(quantity < stock) {
        setQuantity(quantity + 1)
      }
    }

    const decrement = () => {
      if(quantity > 1) {
        setQuantity(quantity - 1)
      }
    }

    return (
        <div className='Counter'>
          <div className={ItemCountStyle.Controls}>
            <button className="btn btn-dark" onClick={decrement}>-</button>
            <h4 className="Number">{quantity}</h4>
            <button className="btn btn-dark" onClick={increment}>+</button>
          </div>

          <div>
            <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
              Agregar al carrito
            </button>
          </div>
        </div>
      
    )
  }


export default ItemCount;