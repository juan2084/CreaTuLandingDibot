import itemStyles from "./item.module.css"

export const Item = ({id, name, img, price, stock}) => {

  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <source srcSet={img} type="image/png" />
            <img src={img} alt="name" className={itemStyles.image}/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}            
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
        </footer>

    </article>
   
  )
}


export default Item;
