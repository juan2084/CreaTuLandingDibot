import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db }from "../../config/firebaseConfig";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const{itemId} = useParams();

    const getProductDB = (itemId) => {
        // Referencia a nuestro producto
        const productRef = doc(db, "products", itemId);

        getDoc(productRef)
            .then(response => {
                const product = {
                    id: response.id,
                    ...response.data()
                }

               setProduct(product);
               setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        getProductDB(itemId);
    }, [])
    

    return (
        <>
        {isLoading ? <h2>Cargando...</h2> :(
            <div className="ItemDetailContainer">
                <ItemDetail {...product}/>
            </div>
        )}
        </>
    )
}

export default ItemDetailContainer;
