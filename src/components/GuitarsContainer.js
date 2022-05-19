
import { useEffect, useState } from "react";
import {  guitars as guitarsD  } from "../Data/guitars";
import GuitarCards from "./GuitarCards";


const GuitarsContainer = () => {

    const [guitars, setGuitars] = useState([])
    
    
    
    useEffect(() => {
      
    const obtenerGuitars = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve(guitarsD)

        }, 2000 )       
    })

obtenerGuitars.then( (result) => {
    console.log('se completo la promesa', result);
    setGuitars(result)

}).catch((err) =>{
    console.log('Hubo un error D:', err);
})
    
    }, [])

  


  return (
     
<div>
    <div>
        {guitars.map( guitar => <GuitarCards key={guitar.id} guitarD={guitar}/> )}
    </div>
    </div>
    
  )
}

export default GuitarsContainer