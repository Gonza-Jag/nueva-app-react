import { createContext, useState } from "react";

export const carritoContext = createContext({
    carrito: [],
    añadirAlCarrito: () => {}
} )



const CarritoProvider = ( {children} ) => {

  const [carrit, setCarrit] = useState( [] )

  const añadirAlCarrito =( guitarId) =>{
    setCarrit( currentCarrito =>{
      return currentCarrito.concat(guitarId)

    })
  }

  const context = { carrit,
     añadirAlCarrito

  }
    
  return (
     <carritoContext.Provider value={ context }>
         {children}

     </carritoContext.Provider>
    
  )
}

export default CarritoProvider
