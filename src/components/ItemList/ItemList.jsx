import Item from "../Item/Item";
import stylesItemList from "/src/styles/itemList.module.css"

export const ItemList = ({products}) => {
  return (
    <div className={stylesItemList.GroupList}>
        {products.map(prod => 
          <Item key={prod.id} {...prod}/>         
        )}
    </div>
  )
}

export default ItemList;
