import { useEffect, useState } from "react";
import styles from "./itemListContainer.module.css";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";




export const ItemListContainer = ({ greeting }) => {

const [products, setProducts] = useState([])

useEffect(() => {
  getProducts()
    .then(response => {
        setProducts(response)
    })
    .catch(error => {
        console.log(error)
    })
}, [])



  return (
    <div>
      <h1 className={styles.h1}> {greeting} </h1>{" "}
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
