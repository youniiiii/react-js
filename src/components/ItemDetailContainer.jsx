import React from 'react';
import ItemDetail from'../components/ItemDetail';
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import dataBase from '../utils/api.js';
import { useParams } from 'react-router-dom';

const  ItemDetailContainer =()=> {
  const {id}=useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data,setData]= useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
if(id){fetchData(2000,dataBase.find((item)=> item.id ===parseInt(id)))
.then(result=>setData(result))
.catch(error => console.error(error))
}else{
alert('no hay datos');
}
  }, [id]);

  return (
    <>
    <ItemDetail  id={data.id} nombre={data.nombre} precio={data.precio} imagen={data.imagen} codigo={data.codigo} stock={data.stock}/>
    </>
  );
}

export default ItemDetailContainer;
