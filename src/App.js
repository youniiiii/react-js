import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/NavBar";
import Contador from "./components/contador";
import ItemList from "./components/ItemList";
function App() {
  return (
    <>
    <ResponsiveAppBar/>
     <Contador  initial={1} stock={10}/>
     <ItemList  producto={"hola"}/>
    </>

  );
}

export default App;
