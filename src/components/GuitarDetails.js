import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { guitars } from '../Data/guitars'

const GuitarDetails = () => {

    const {guitarId} = useParams()
    const [guit, setGuit] = useState( {} )


    useEffect( () => {

        (async() => {
            const guitars = await getGuitarDetails()
            if (guitars) {
                
            setGuit(guitars)

            }
       }) ()
      
      

    }, [guitarId])
    
const getGuitarDetails = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(guitars.find( r => r.id === guitarId) )

        }, 500);
    })

}


  return (
      <>
    <strong className='p-3'>Especificaciones:</strong>
    <div style={{ border:' inset #B8523C 3px', margin:'20px', padding:'20px', height:'500px', width:'420px', display:'flex', flexWrap:'wrap'}}>

    <strong className='p-3'> {guit.id}- </strong>
    <strong className='p-3'>{guit.name}</strong>
    <strong className='p-3'>{guit.model}</strong>
    <strong >{guit.image}</strong>
    <strong className='p-3'>{guit.color}</strong> <strong className='text-amber-500 p-3'> {guit.precio}</strong>

    </div>
    </>
  )
}

export default GuitarDetails
