import { useState, useEffect } from 'react'

import '../styles/PatientForm.css'

const PatientForm = ({setPatients, patients}) => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [error, setError] = useState(false)

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([ nombre, apellidos ].includes('')){      
      setError(true)
      return 
    } 
    
    setError(false)           
    
    const patientInfo = {
      nombre,
      apellidos,
      id: generarId()
    }

    setPatients([...patients, patientInfo])

    setNombre('')
    setApellidos('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >     
        {error && 'Hay campos vacíos'}   
        <input
          id='nombre'
          type='text'        
          placeholder='Tu nombre'
          className='form-input' 
          value={nombre} 
          onChange={e => setNombre(e.target.value)}                
        />            
        
        <input
          id='apellidos'
          type='text'        
          placeholder='Tus apellidos'
          className='form-input' 
          value={apellidos}     
          onChange={e => setApellidos(e.target.value)}      
        />

        <input
          id='buttonSubmit'
          type='submit'
          value='Guardar'
          className='form-input'                                     
        />
      </form>      
    </>      
  )
}

export default PatientForm