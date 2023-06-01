/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'


function App() {
  

  const [persona, setPersona] = useState({
    nombre: '',
    apellido: '',
    edad: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(persona.nombre.trim().length > 3 && persona.apellido.trim().length > 6){
      setShow(true)
      setError(false)
    }else{
      setError(true)
      setShow(false)
    }
  }
  return (
    <>
      <h1>PARCIAL FRONT 3</h1>
      <div className="container">
        <Form handleSubmit={handleSubmit} setPersona={setPersona}/>
      {show && <Card persona={persona}/>}
      {error && <p >Por favor chequea que la información sea correcta</p>}
      </div>
      
    </>
  )
  
}

export default App
