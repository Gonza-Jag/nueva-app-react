import React, { useState } from 'react'
import { useContext } from "react"
import { carritoContext } from "../Data/context/carritoContext"

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
    


    const { carrito} = useContext(carritoContext)
        return(
            
            <ul style={{backgroundColor:'lightblue', padding:'30px', color:'white', borderRadius:'30px'}}>
     { carrito.map((guitar) =>{
        
                return(
                    <>
                        <li>{guitar.guitarId} {guitar.guitarName} {guitar.guitarModel} {guitar.number}</li>
                    </>
                )
            }
            )} 
            </ul>
         
        )
   
        

   

//   return (

    
//     <div>
//         <button className='btn' onClick={handleRemove}>
            
//         </button>
//         <span className='alert alert-white'> {count} </span>

//         <button className='btn' onClick={handleAdd}>
            
//             </button>

//             <button className='btn' onClick={() => onAdd(count)}
//             >
//             Agregar al carrito
//             </button>
//    </div>

   
//   )
}

export default ItemCount  