import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd} ) => {
    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if (count < stock) {
            setCount(counter => counter + 1)
        }
    }
        const handleRemove = () => {
            if (count > initial ) {
                setCount(counter => counter - 1)
            }
        }
    




  return (
    <div>
        <button className='btn' onClick={handleRemove}>
            
        </button>
        <span className='alert alert-white'> {count} </span>

        <button className='btn' onClick={handleAdd}>
            
            </button>

            <button className='btn' onClick={() => onAdd(count)}
            >
            Agregar al carrito
            </button>
   </div>

   
  )
}

export default ItemCount  