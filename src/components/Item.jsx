import React from 'react';
import { Link } from 'react-router-dom'

const Cardts = ({ imagen, nombre, precio, codigo, id }) => {
  return (
    <div className="container" >
      <div className="image">
        <img src={imagen} alt="" width="300px" height="400px" />
      </div>
      <div className="info">
        <h3>nombre:<br />{nombre}</h3>
        <p>precio:{precio}</p>
        <p>codigo:{codigo}</p>
       <Link to={`/item/${id}`}>
       
       <button className='btn' id={id}>detalles</button>
      </Link>
      </div>
    </div >
  );
}

export default Cardts;