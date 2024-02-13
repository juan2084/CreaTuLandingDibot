import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"; 
import AppStyle from "./app.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className={AppStyle.App}>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
