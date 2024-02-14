import ItemCount from "../ItemCount/ItemCount";
import stylesItemDetail from "./itemDetail.module.css"

export const ItemDetail = ({name, img, category, description, price}) => {
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
        </section>
        <footer className="ItemFooter">
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </footer>
    </article>
  )
}

export default ItemDetail;