import ItemCount from "../ItemCount/ItemCount";
import stylesItemDetail from "/src/styles/itemDetail.module.css"
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({id, name, img, category, description, price, age, stock}) => {
  const [quantityAdded, setquantityAdded] = useState(0)
  
  const {addItem} = useContext(CartContext)
  
  const handleOndAdd = (quantity) => {
    setquantityAdded(quantity)

    const item = {
        id, name, price
    }

    addItem(item, quantity)
  }


  return (
    <article className={stylesItemDetail.CardItemDetail}>
        <header className="Header">
            <h2 className={stylesItemDetail.ItemHeaderDetail}>
                {name}
            </h2>
        </header>
        <picture>
            <source srcSet={img} type="image/png" />
            <img src={img} alt="name" className={stylesItemDetail.ImageDetail}/>
        </picture>
        <section>
            <p className="Info">
                Categoría: {category}
            </p>
            <p className="Info">
                Descripción: {description}
            </p>
            <p className="Info">
                Precio: ${price}            
            </p>
            <p className="Info">
                Año: {age}            
            </p>
        </section>
        <footer className="ItemFooter">
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ): (
                    <ItemCount initial={1} stock={stock} onAdd={handleOndAdd}/>
                )
            }
        </footer>
    </article>
  )
}

export default ItemDetail;