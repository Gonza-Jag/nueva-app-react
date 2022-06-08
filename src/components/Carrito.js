import { useContext } from "react"
import { carritoContext } from "../Data/context/carritoContext"

const Carrito = () => {
  const { carrito} = useContext(carritoContext)

  return (
    <div>
    <strong> Carrito:</strong> {carrito.join(',')}
    
    </div>
  )
}
export default Carrito
