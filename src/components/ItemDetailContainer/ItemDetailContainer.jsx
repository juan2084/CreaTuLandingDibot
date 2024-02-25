import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const{itemId} = useParams()

    useEffect(() => {
      getProductById(itemId)
        .then(response => {
            setProduct(response);
            setIsLoading(false);
        })
        .catch(error =>{
            console.log(error)
      })
    }, [itemId])
    

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
