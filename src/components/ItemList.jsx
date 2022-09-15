import React from 'react';
import  Item from './Item'
const ItemList =({items})=> {
  return (
    <div>
      {
      items.length>0
      ? items.map(item => <Item key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} codigo={item.codigo}/>)
      :<p>cargando...</p>
      }
    </div>
  );
}




export default ItemList;
