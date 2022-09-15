import React from 'react';
import ItemCount from'../components/ItemCount';
import ItemList from'../components/ItemList';
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import dataBase from '../utils/api.js';
const  ItemListContainer =({greting})=> {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data,setData]= useState([])


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

fetchData(2000,dataBase)
.then(result=>setData(result))
.catch(error => console.error(error))
  }, []);

const onAdd =(qty)=>{
    alert('alesta'+ qty + ' itemsss.');
}

  return (
    <>
    <ItemCount   initial={1} stock={10}  onAdd={onAdd}/>
    <ItemList items={data}/>
    </>
  );
}

export default ItemListContainer;
