import { Link } from "react-router-dom"


const GuitarCards = ({guitarD}) => {
  return (
    <div style={{ border:' inset #B8523C 3px', margin:'20px', padding:'20px', height:'500px', width:'420px', display:'flex', flexWrap:'wrap'}}>
        
        <strong>{guitarD.name}</strong>
        <div>{guitarD.image}</div>
        <strong>{guitarD .model } </strong>
        

        <Link  to={`/guitarras/${guitarD.id}`} class="text-amber-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      > Especificaciones </Link>

    </div>
  )
}

export default GuitarCards
