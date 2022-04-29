

const GuitarCards = ({guitarD}) => {
  return (
    <div style={{border:'solid blue 5px', margin:'20px', padding:'20px'}}>
        
        <strong>{guitarD.name}</strong>
        <img className='h-20' src={'../assets/img/jazzmaster.jpg'} ></img>
        <div>{guitarD.model} </div>
        <div>{guitarD.color} </div>

    </div>
  )
}

export default GuitarCards