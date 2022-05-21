
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import {  guitars as guitarsD  } from "../Data/guitars";
import GuitarCards from "./GuitarCards";


const GuitarsContainer = () => {

    const [guitars, setGuitars] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    
    useEffect(() => {
   
        obtenerGuitars(). then (data => {
            setGuitars(data)
            setLoading(false)
        })
        
    }, [])

        const obtenerGuitars = () =>{
         return  new Promise   ( (resolve, reject) =>{

        setTimeout( ()=>{
                 resolve(guitarsD)
                 
                }, 2000 ) ;      
                
   
            })
        }

    
                
  //   obtenerGuitars.then( (result) => {
 //       console.log('se completo la promesa', result);
 //        setGuitars(result)
 //        
 //    }).catch((err) =>{
 //       console.log('Hubo un error D:', err);
  //    })
                
                



  


  return (
     
     
    <div> 
  
        { loading ? 
        
       <span className="flex h-3 w-3">
       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
       <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
     </span> :
        guitars.map( r => <GuitarCards key={r.id} data ={r}/> )}
        
        <strong>Loading...</strong>
    </div>
    
    
  )
}

export default GuitarsContainer