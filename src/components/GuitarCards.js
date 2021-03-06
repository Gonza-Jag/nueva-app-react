
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { guitars } from "../Data/guitars"
import { useFavs } from "../Data/context/carritoContext"








const GuitarCards = ({data}) => {
  
  const { añadirAlCarrito} = useFavs()
  
  
  return (
    <div style={{ border:' inset #B8523C 3px', margin:'20px', padding:'20px', height:'500px', width:'420px', display:'flex', flexWrap:'wrap'}}>
      <div>
      <strong>{data.name}</strong>
        <div>{data.image}</div>
        <strong>{data.model } </strong>
        
        
        </div> 
        <Link  to={`/guitarras/${data.id}`} className="text-amber-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      > Especificaciones </Link>
      
      <button onClick={ () => añadirAlCarrito(data.id, data.name,data.model)} className="text-green-500 font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Añadir al carrito</button>
 
      

    </div>
  )
}

export default GuitarCards

