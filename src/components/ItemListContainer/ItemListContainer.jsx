import { useEffect, useState } from "react";
import styles from "/src/styles/itemListContainer.module.css";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const {category} = useParams();

useEffect(() => {
  setIsLoading(true); // Se setea cada vez se cargue el componente, para que aparezca la carga
  const asyncFunc = category ? getProductsByCategory : getProducts

  asyncFunc(category)
  .then(response => {
      setProducts(response);
      setIsLoading(false);
  })
  .catch(error => {
      console.log(error)
  })
}, [category])


  return (
    <>
    {isLoading ? <h2>Cargando...</h2> :
      <div>
          <h1 className={styles.h1}> {greeting} </h1>{" "}
          <ItemList products={products}/>
        </div>
    }
    </>
  );
};

export default ItemListContainer;
