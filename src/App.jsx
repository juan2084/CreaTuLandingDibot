
import AppStyle from "./app.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider, CartContext } from "./context/CartContext";
import {Cart, ItemDetailContainer, ItemListContainer, NavBar} from "./components/index.js"


function App() {
  return (
    <div className={AppStyle.App}>
    <>
      <CartProvider>      
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
          </BrowserRouter>
        </CartProvider>
    </>
    </div>
  );
}

export default App;
