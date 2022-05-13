import { createContext, useState } from "react";

export const carritoContext = createContext({
    carrito: [],
    añadirAlCarrito: () => {}
} )



const carritoProvider = ( {children} ) => {

  const [carrito, setCarrito] = useState( [] )

  const añadirAlCarrito =( guitarId) =>{
    setCarrito( currentCarrito =>{
      return currentCarrito.concat(guitarId)

    })
  }
    
  return (
     <carritoContext.Provider value={ {carrito, añadirAlCarrito} }>
         {children}

     </carritoContext.Provider>
    
  )
}

export default carritoProvider
