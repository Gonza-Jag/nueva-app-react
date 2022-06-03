import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useFavs } from '../Data/context/CarritoContext'

const SaveGuitars = () => {
    const { carrito} = useFavs()

useEffect(() => {


  
}, [])

const saveFavsHandler = () =>{
    const user = {
        name: 'Juan',
        telefono:'2424655236',
        email:'juan@gmail.com'
    }


    const orden = {
        buyer: user,
        items: carrito,
        total: carrito.length
    }

    console.log(orden);
    saveToFirestore(orden)
}

const saveToFirestore = (orden) => {

    const db = getFirestore()
    const favsCollection = collection(db, 'orden')

    addDoc(favsCollection, orden). then ((response) => {
        console.log(response)

    })

}


  return (
    <div>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={saveFavsHandler}> Continuar </button>
    </div>
  )
}

export default SaveGuitars