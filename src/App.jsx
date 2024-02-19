import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [laptop , setLaptop] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3004/products')
    .then(res => res.json())
    .then(data => {
      console.log('laptop',data)
      setLaptop(data);
    });
  },[])

  return (
    <>
      <ul className="product-list">
        {laptop.map(x=><li key={x.id}>{x.name}</li>)}
      </ul>
      
    </>
  )
}

export default App
