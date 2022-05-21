import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import EmpanadasCard from './EmpanadasCard'

const Empanadas = () => {

const [empanadas, setEmpanadas] = useState([])
const [empanadasBaratas, setEmpanadasBaratas] = useState([])


useEffect(() => {
  getEmpanadas()
  getEmpanadasBaratas()
}, [])

const getEmpanadas = ()=> {
    const db = getFirestore()
    const empanadasCollection = collection(db, 'FireId')
    getDocs( empanadasCollection).then(snapshot => {
      if (snapshot.size > 0)  {
          const ids =  snapshot.docs.map(d => d.id ).join(',')
          console.log('ids:' , ids)

          const empanadaData = snapshot.docs.map( d=> ({'id': d.id, ... d.data() }))
          setEmpanadas(empanadaData)
      }
    })

}


const getEmpanadasBaratas = ()=> {
    const db = getFirestore()
    const empanadasCollection = collection(db, 'FireId')
    const q = query(empanadasCollection, where ('price', '<', 115))
    getDocs( empanadasCollection).then(snapshot => {
      if (snapshot.size > 0)  {  

          const empanadasBaratasData = snapshot.docs.map( d=> ({'id': d.id, ... d.data() }))
          setEmpanadasBaratas(empanadasBaratasData)
      }
    })

}






  return (
      <>
    <div>Empanadas</div>
    {empanadas.map(e => <EmpanadasCard key={e.id} item={e}/>   )}
    <div className='font-bold'>Empanadas Baratas</div>
    {empanadasBaratas.map(e => <div  key={e.id}> {e.title} </div>   )}
    </>
  )
}

export default Empanadas