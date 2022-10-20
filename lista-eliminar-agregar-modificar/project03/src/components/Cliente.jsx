import React from 'react'

const Cliente = ({ person }) => {

  const { nombre, apellidos, riqueza } = person

  return (
    <>
      <div>
        <p>Nombre: <span>{nombre}</span></p>
        <p>Apellidos: <span>{apellidos}</span></p>
      </div>
    </>
  )
}

export default Cliente