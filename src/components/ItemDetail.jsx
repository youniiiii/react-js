import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from './CartContext'
const ItemDetail = ({ item }) => {
    const ctx = useContext(CartContext);
  
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert('seleccion ' + qty + "items");
        setItemCount(qty);
        // eslint-disable-next-line no-undef
        ctx.addItem(item,qty);
    }

    return (
        <>
            {item && item.imagen
                ?<div className=" flex">
                    <div className="image">
                        <img src={item.imagen} alt="" width="300px" height="400px" />
                    </div>
                    <div className="info">
                        <h3>articulo:<br /> {item.nombre}</h3>
                        <p>precio: {item.precio}</p>
                        <p>codigo: {item.codigo}</p>
                        <p>cantidad: {item.stock}</p> 
                        <div>
                        {
                            (itemCount === 0)

                                ?<ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} />
                                :<Link to={"/cart"}><button>guardado</button></Link>
                        }
                    </div>
                    </div>
                    <br/>
                  
                </div>

                :<p>cargando</p>

            }
        </>
    );
}
export default ItemDetail;
