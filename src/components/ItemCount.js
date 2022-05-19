import React, { useState } from 'react'

const ItemCount = ({stock, onAdd} ) => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
        const handleRemove = () => {
            if (count > 0 ) {
                setCount(count - 1 )
            }
        }
    




  return (
    <div>
        <button className='btn' onClick={handleRemove}>
            <i className='fas fa-plus'></i>
        </button>
        <label className='alert alert-white'> {count} </label>

        <button className='btn' onClick={handleAdd}>
            <i className='fas fa-plus'></i>
            </button>

            <button className='btn bg-primary text-white btn-block' onClick={ () => onAdd(count)}
            >
            Agregar al carrito
            </button>
   </div>

   
  )
}

export default ItemCount  