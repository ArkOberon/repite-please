import React from 'react'

const Patient = ({patient}) => {
  
  const { nombre, apellidos } = patient
  
  return (
    <>      
      <p>nombre: <span>{nombre}</span></p>   
      <p>apellidos: <span>{apellidos}</span></p>    
    </>
  )
}

export default Patient