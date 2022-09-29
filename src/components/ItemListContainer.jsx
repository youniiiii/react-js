import React from 'react';
import ItemList from '../components/ItemList';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import {db} from '../utils/fireBase';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data ,setData] = useState([]);
  const { id } = useParams();

  useEffect( () => {
    async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    })}
    
    setData(fetchData());
  }, [id]);

  return (
    <>
      <ItemList items={data} />
    </>
  );
}

export default ItemListContainer;
