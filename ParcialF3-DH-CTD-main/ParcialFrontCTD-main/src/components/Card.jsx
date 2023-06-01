import React from "react";



const Card = ({persona}) => {
    return (
      <>
          <div className="card">
              <h1>Esta tarjeta pertenece a:</h1>
              <h2>{persona.nombre}</h2>
              <h2>{persona.apellido}</h2>
              <h2>Tenes {persona.edad} años</h2>
          </div>
      </>
    )
  }


export default Card;
