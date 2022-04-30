

const GuitarCards = ({guitarD}) => {
  return (
    <div style={{ border:' inset #B8523C 3px', margin:'20px', padding:'20px', height:'500px', width:'420px', display:'flex', flexWrap:'wrap'}}>
        
        <strong>{guitarD.name}</strong>
        <div>{guitarD.image}</div>
        <strong>{guitarD.model} </strong>
        <div>{guitarD.color} </div>

    </div>
  )
}

export default GuitarCards