import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import "./ItemDetailContainer.css"
import {useParams} from 'react-router-dom'
import {BeatLoader} from "react-spinners";
import {db} from "../firebase/firebase.js";
import { doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{

        const refDoc = doc(db, "productos", id);
        getDoc(refDoc)
        console.log(refDoc)
        .then (result =>{
            setProduct( {id:result.id, ...result.data()});
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setLoading(false);
        });
    },[id])


    console.log(product);
    return (
        <div>
            {loading ? (
                <BeatLoader className="spinner" color="rgb(236, 114, 114)" cssOverride={{display:"flex", justifyContent:"center", marginTop:"5%"}}/>
            ) : (
                <>
                    <ItemDetail product={product}/>
                </>
            )}
        </div>
    )
}

export default ItemDetailContainer;