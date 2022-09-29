import React from 'react';
import { Link } from 'react-router-dom'

const Cardts = ({ img,title, precio, categoria, id }) => {
  return (
    <div className="container" >
      <div className="image">
        <img src={img} alt="" width="300px" height="400px" />
      </div>
      <div className="info">
        <h3>nombre:<br />{title}</h3>
        <p>precio:{precio}</p>
        <p>codigo:{categoria}</p>
       <Link to={`/item/${id}`}>
       
       <button className='btn' id={id}>detalles</button>
      </Link>
      </div>
    </div >
  );
}

export default Cardts;