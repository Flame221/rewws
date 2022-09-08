import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Favorite from "./components/Favorite/Favorite";
import Nav from "./components/Header/MyAppBar";
import Products from "./components/Products/Products";

export const CartContext = createContext()
export const FavoriteContext = createContext()

function App() {
  

  const [cart, setCart] = useState([])
  const [favorite, setFavorite] = useState([])

  return (
    <div className="App">
      <FavoriteContext.Provider value={{favorite, setFavorite}}>
        <CartContext.Provider value={{cart, setCart}}>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/favorite" element={<Favorite/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartContext.Provider>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
