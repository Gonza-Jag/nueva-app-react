import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { carritoContext } from "../Data/context/CarritoContext"



const ItemListContainer = ({greeting}) => {
  const [model, setModel] = useState()
  const {categoryId} = useParams()

  //useEffect(() => {
  //  if (categoryId === undefined) {
  //    carritoContext().then((resp) => setModel(resp) )

 //   }else {
  //    carritoContext().then((resp) =>
  //    setModel(resp.filter((product) => product.category === categoryId))
 //     )
//
 //   }
  
   
 // }, [categoryId])
  
  
  
  
  
  
  return (
    
    <div className="greeting" style={{color: '#B8523C'}}>
        {greeting}
        <img src='../assets/img/jazzmaster.jpg'/>
        </div>
  )
}


export default ItemListContainer