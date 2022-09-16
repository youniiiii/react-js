import React from 'react';
import ItemCount from './ItemCount'; 
const ItemDetail =({imagen,nombre, precio, codigo,id,stock}) => {
        return (
            <>
            <div className="container flex" id={id}>
                <div className="image">
                <img src={imagen} alt="" width="300px" height="400px"/>
                </div>
                <div className="info">
                <h3>nombre:<br/>{nombre}</h3>
                <p>precio:{precio}</p>
                <p>codigo:{codigo}</p>
                </div>
            </div >
            <ItemCount   initial={1} stock={stock}/>
            </>
        );
      }
export default ItemDetail;
