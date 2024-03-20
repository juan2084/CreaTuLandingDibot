import sierra from "../../assets/sierra.png"; 
import ourFamilyStyle from "/src/styles/ourFamily.module.css";

export const OurFamily = () => {
  return (
    <>
        <div className={ourFamilyStyle.Image}>
            <img src={sierra}/>
        </div>
        <h2 className={ourFamilyStyle.h2}>BODEGAS JUAN</h2>
        <p className={ourFamilyStyle.p}>
          Las Sierras de Mahoma son un afloramiento rocoso de 20 km2 en el norte del departamento de San José, Uruguay. Se trata de un "mar de piedra" que contrasta con el paisaje suave de la región. 
          En esta región llana, rodeada de muchos montes, se encuentra un espacio muy apropiado para la plantación de uvas.
        </p>
        <p className={ourFamilyStyle.p}>
          Desde el Siglo pasado, cuatro generaciones de la familia de Juan, vienen cocechando variedades de uvas, creando los mejores vinos de la región. 
          Se pueden encontrar desde vinos tintos, blancos o rosados, y la familia tiene como especialidad la Gran Reserva. 
        </p>
        <p className={ourFamilyStyle.p}>
          Puede visitar la Bodega, recorrer las hermosas y antiguas instalaciones y compartir un almuerzo con familia o amigos y degustar nuestros exquisitos ejemplares. 
        </p>
    </>
  )
}


export default OurFamily;
