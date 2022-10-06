import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <div className="card">
            <img src={product.img} alt="{product.title}" />
            <div className="info-product">
                <p className="product-name">{product.title}</p>
                <p>price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <button className='boton-detalle'>
                <Link to={`/detail/${product.id}`}>
                    VER DETALLE
                </Link>
            </button>
        </div>
    )
}

export default Item;