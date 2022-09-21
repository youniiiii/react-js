import React from 'react';
import ItemList from'../components/ItemList';
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import dataBase from '../utils/api.js';
import { useParams } from 'react-router-dom';
const  ItemListContainer =()=> {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data,setData]= useState([])
const {id}=useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
if(id){
  fetchData(2000,dataBase.filter(item => item.categoryId === parseInt(id)))
  .then(result=>setData(result))
  .catch(error => console.error(error))
}else{
  fetchData(2000,dataBase)
.then(result=>setData(result))
.catch(error => console.error(error))
}

  }, [id]);

  return (
    <>
   <ItemList items={data}/>
    </>
  );
}

export default ItemListContainer;
