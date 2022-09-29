import React from 'react';
import ItemDetail from'../components/ItemDetail';
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import { db}  from '../utils/fireBase';
import { useParams } from 'react-router-dom';

const  ItemDetailContainer =()=> {
  const {id}=useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data,setData]= useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
if(id){fetchData(2000,db.find((item)=> item.id ===parseInt(id)))
.then(result=>setData(result))
.catch(error => console.error(error))
}else{
alert('no hay datos');
}
  }, [id]);

  return (
    <>
    {(data.nombre)
    ?<ItemDetail item={data}/>
    :<div className="loader">
    <div className="scanner">
    <h1>Loading...</h1>
    </div>
    </div>
    }</>
  );
}

export default ItemDetailContainer;
