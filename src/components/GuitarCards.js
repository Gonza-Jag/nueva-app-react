import { useContext} from "react"
import { Link } from "react-router-dom"
import { carritoContext } from "../Data/context/CarritoContext"





 const GuitarCards = ({data}) => {
  
 const { añadirAlCarrito} = useContext(carritoContext)
  
  return (
    <div style={{ border:' inset #B8523C 3px', margin:'20px', padding:'20px', height:'500px', width:'420px', display:'flex', flexWrap:'wrap'}}>
      <div>
      <strong>{data.name}</strong>
        <div>{data.image}</div>
        <strong>{data.model } </strong>
        <button onClick={ () => añadirAlCarrito(data.id, data.name,data.model)} className="text-green-500 font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Añadir al carrito</button>
        
        </div> 
        <Link  to={`/guitarras/${data.id}`} className="text-amber-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      > Especificaciones </Link>

    </div>
  )
}

export default GuitarCards
