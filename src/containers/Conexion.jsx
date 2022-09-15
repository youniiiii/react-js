
import fetchData from '../utils/fetchData';
import { useEffect , useState} from 'react';
import Cardts from '../components/Cardts';
import dataBase from '../utils/api.js';

const Carts = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[data,setData]= useState([])


   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {

fetchData(2000,dataBase)
.then(result=>setData(result))
.catch(error => console.error(error))
   }, []);


   return (

      <>
         {
            data.map(items => (
               <Cardts
                  key={items.id}
                  imagen={items.imagen}
                  nombre={items.nombre}
                   precio={items.precio}
                    description={items.codigo}
               />
            ))
         }

      </>
   ); 
}

export default Carts;
