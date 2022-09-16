import React from 'react';
import ItemDetail from'../components/ItemDetail';
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import dataBase from '../utils/api.js';

const  ItemDetailContainer =()=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data,setData]= useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
fetchData(2000,dataBase[2])
.then(result=>setData(result))
.catch(error => console.error(error))
  }, []);

  return (
    <>
    <ItemDetail  key={data.id} nombre={data.nombre} precio={data.precio} imagen={data.imagen} codigo={data.codigo} stock={data.stock}/>
    </>
  );
}

export default ItemDetailContainer;
