import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"; 
import AppStyle from "./app.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className={AppStyle.App}>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
