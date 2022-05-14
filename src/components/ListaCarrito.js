import { useContext } from "react"
import { carritoContext } from "../Data/context/CarritoContext"
import { guitars } from "../Data/guitars"




const ListaCarrito = () => {

    const { carrito } = useContext(carritoContext)

  return (
    <div>
        <strong>Carrito:</strong>
        { carrito.join(',')}
    </div>
  )
}

export default ListaCarrito

