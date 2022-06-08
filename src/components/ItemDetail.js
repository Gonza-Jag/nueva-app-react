import React from 'react'
import CarritoProvider from '../Data/context/carritoContext'
import { guitars } from '../Data/guitars'
import GuitarCards from './GuitarCards'
import ItemCount from './ItemCount'

const ItemDetail = ( {producto} ) => {

    const  { id, name, model, color, image, stock, precio } = producto

    
    const onAdd = (count) => {

        console.log(count)
    }



  return (
    <CarritoProvider>

    <div>
        {guitars.map( guitar => <GuitarCards key={guitar.id} guitarD={guitar}/> )}
    </div>
    <span className='font-bold text-5xl leading-none align-baseline'>
        ${precio}
    </span>
    <ItemCount stock={stock} onAdd={onAdd}/>

    </CarritoProvider>
  )
}

export default ItemDetail