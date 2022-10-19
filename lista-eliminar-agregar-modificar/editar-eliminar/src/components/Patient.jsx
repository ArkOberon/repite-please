import React from 'react'

const Patient = ({patient, setSinglePatient}) => {

  const {nombre, apellidos} = patient

  return (
    <>
      <p>Nombre: <span>{nombre}</span></p>
      <p>Apellidos: <span>{apellidos}</span></p>
      <button 
        type='button'
        onClick={() => setSinglePatient(patient)}
      >
        Editar
      </button>
      <button 
        type='button'
      >
        Eliminar
      </button>
    </>
  )
}

export default Patient