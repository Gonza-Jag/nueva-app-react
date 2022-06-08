import { createContext, useContext, useState } from "react";


export const carritoContext = createContext({
    carrito: [],
    añadirAlCarrito: () => {}
} )

export const useFavs = () =>{
  return useContext(carritoContext)
}



const CarritoProvider = ( {children} ) => {

  const [carrito, setCarrit] = useState( [] )


  const añadirAlCarrito =( guitarId, guitarName,guitarModel ) =>{
    const guitarFormatted = {"guitarId":guitarId, "guitarName":guitarName,"guitarModel":guitarModel,'number':0}
   if(carrito.find(el=>el.guitarName === guitarName)) {
      carrito.forEach(guitar => {
        guitar.number = guitar.number + 1
      });
    }else{
      setCarrit( currentCarrito => {
        return currentCarrito.concat(guitarFormatted)
      })
    }
    console.log(carrito);
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
