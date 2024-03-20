import { useEffect, useState } from "react";
import styles from "/src/styles/itemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const ItemListContainer = ({ greeting }) => {
  const {category} = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (category) => {  
    // Referencia a la colección products de la base de datos 
    const myProducts = category ? query(collection(db, "products"), where( "category", "==", category)) : collection(db, "products")


    // Obtener documentos de la base de datos
    getDocs(myProducts).then((response) => {
        // Se recorren los documentos y se guardan en un nuevo array
        const productList = response.docs.map((doc) => {
          const item = {
            id: doc.id,
            ...doc.data(),
          }
          return item;
        });
          // Guardamos los productos en el state
          setProducts(productList);
          setIsLoading(false);
      });
  };


  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
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
