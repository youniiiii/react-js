import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import CartCustomProvider from "./components/CartContext";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada";
import Checkout from "./components/Checkout";

const App = () => {
  return (
      <BrowserRouter>
        <CartCustomProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<PaginaNoEncontrada />}/>
            <Route path="/checkout/" element={<Checkout />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
  )
}

export default App;
