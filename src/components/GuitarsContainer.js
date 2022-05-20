
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
  
        { loading ?  <h1>loading...</h1> :
        guitars.map( r => <GuitarCards key={r.id} data ={r}/> )}
        

    </div>
    
    
  )
}

export default GuitarsContainer