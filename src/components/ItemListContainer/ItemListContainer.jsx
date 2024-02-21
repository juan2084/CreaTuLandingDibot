import { useEffect, useState } from "react";
import styles from "/src/styles/itemListContainer.module.css";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {

const [products, setProducts] = useState([]);

const {category} = useParams();

useEffect(() => {
  const asyncFunc = category ? getProductsByCategory : getProducts

  asyncFunc(category)
  .then(response => {
      setProducts(response)
  })
  .catch(error => {
      console.log(error)
  })
}, [category])


  return (
    <div>
      <h1 className={styles.h1}> {greeting} </h1>{" "}
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
