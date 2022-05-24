import React from 'react'

const EmpanadasCard = ({item: e}) => {
  return (
      <div>  
    <div className='font-bold'>{e.title}</div>
    <div>N°id: {e.id}</div>
    <div>{e.description}</div>
    <div>Precio:{e.price}</div>
    <div>Stock :{e.stock}</div>
    </div>
  )
}

export default EmpanadasCard