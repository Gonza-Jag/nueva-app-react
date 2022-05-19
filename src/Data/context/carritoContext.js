import { createContext, useState } from "react";


export const carritoContext = createContext({
    carrito: [],
    añadirAlCarrito: () => {}
} )



const CarritoProvider = ( {children} ) => {

  const [carrito, setCarrit] = useState( [] )


  const añadirAlCarrito =( guitarId, guitarName,guitarModel) =>{
    setCarrit( currentCarrito => {
      return currentCarrito.concat(guitarId, guitarName,guitarModel)

    })
  }

  const context = { carrito,
     añadirAlCarrito

  }
    
  return (
     <carritoContext.Provider value={ context }>
         {children}

     </carritoContext.Provider>
    
  )
}

export default CarritoProvider
