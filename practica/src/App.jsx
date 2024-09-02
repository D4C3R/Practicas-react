import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav >
    <td className="nav">
      <tr>inicio</tr>
      <tr>1</tr>
      <tr>2</tr>
      <tr>3</tr>
      <tr>4</tr>
      <tr>5</tr>
    </td>
    </nav>
    <h1>Hola mundo</h1>
      <div>
        <img src="https://www.ubuy.cr/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxTzlJeFYwNnBMLl9TUzQwMF8uanBn.jpg"  alt="" />
      </div>
      
    </>
  )
}

export default App
