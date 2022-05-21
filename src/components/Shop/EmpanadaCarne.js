import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";


const EmpanadaCarne = () => {


    const [empa, setEmpa] = useState( {} )

useEffect(() => {
  getEmpanadaCarne()

}, [])


const getEmpanadaCarne = () => {
    const db = getFirestore()
    const empanadaDoc = doc(db,'FireId', 'F4o87jdwiuh1uaOd6kuV')
    getDoc(empanadaDoc).then( result => {
        if (result.exists()){
            console.log(result);
            console.log('id', result.id);
            console.log('data', result.data());
            setEmpa( result.data())
        }
    })
}








  return (
    <div>
       <div> {empa.title} </div>
        
       <div>Precio: {empa.price}</div>
       <div>Stock: {empa.stock}</div>
    </div>
  )
}

export default EmpanadaCarne