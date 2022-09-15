import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/NavBar";
import Contador from "./components/Contador";
import ItemList from "./components/ItemList";
import Conexion from "./containers/Conexion";
function App() {
  return (
    <>
    <ResponsiveAppBar/>
     <Contador  initial={1} stock={10}/>
     <ItemList  producto={"hola"}/>
     <Conexion/>
     </>

  );
}

export default App;
