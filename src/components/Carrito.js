import { useContext } from "react"
import { carritoContext } from "../Data/context/CarritoContext"

const Carrito = () => {
  const { carrito} = useContext(carritoContext)



  return (
    <div>
      Carrito: {carrito.join(',')}
    </div>
  )
}
export default Carrito
