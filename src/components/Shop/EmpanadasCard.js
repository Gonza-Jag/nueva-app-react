import React from 'react'

const EmpanadasCard = ({item: e}) => {
  return (
      <div>
    <div>{e.id}</div>
    <div className='font-bold'>{e.title}</div>
    <div>{e.id}</div>
    <div>{e.description}</div>
    <div>{e.price}</div>
    <div>{e.stock}</div>
    </div>
  )
}

export default EmpanadasCard