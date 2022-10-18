import React from 'react'

const Patient = ({patient}) => {

  const {nombre, apellidos} = patient

  return (
    <>
      <p>Nombre: <span>J{nombre}</span></p>
      <p>Apellidos: <span>{apellidos}</span></p>
    </>
  )
}

export default Patient