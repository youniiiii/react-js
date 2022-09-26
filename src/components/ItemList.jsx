import React from 'react';
import  Item from './Item'
const ItemList =({items})=> {
  return (
    <div>
      {
      items.length>0
      ? items.map(item => <Item key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} codigo={item.codigo} id={item.id}/>)
      :
      <div className="loader">
        <div className="scanner">
        <h1>Loading...</h1>
        </div>
       </div>
      }
    </div>
  );
}




export default ItemList;
