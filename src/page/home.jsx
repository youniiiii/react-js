import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Cart from "../components/Cart";
function Home() {

    return (


        <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={ <ItemListContainer/>}/>
                   
                <Route path='/category/:id' element={ <ItemListContainer/>}/>
                   
                <Route path='/item/:id' element={<ItemDetailContainer/> }/>
                <Route path='/cart' element={<Cart/>}/>
                    
          
            </Routes>

        </BrowserRouter>


    );
}

export default Home;