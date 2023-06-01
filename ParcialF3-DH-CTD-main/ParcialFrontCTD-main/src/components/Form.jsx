import React from 'react'

const Form = ({handleSubmit, setPersona}) => {
  
  return (
    <>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
            <label >Ingrese su nombre</label>
            <input type='text' onChange={(e) => setPersona((state) =>({...state, nombre: e.target.value}))}/>
            <label >Ingrese su apellido</label>
            <input type='text' onChange={(e) => setPersona((state) =>({...state, apellido: e.target.value}))}/>
            <label >Ingrese su edad</label>
            <input type='text' onChange={(e) => setPersona((state) =>({...state, edad: e.target.value}))}/>
            <button>enviar</button>
        </form>
        </div>
    </>
  )
}

export default Form