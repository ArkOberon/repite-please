import { useState, useEffect } from 'react'
import '../styles/PatientForm.css'

const PatientForm = ( {patients, setPatients, singlePatient} ) => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')  
  const [error, setError] = useState('')

  useEffect(() => {
    if(Object.keys(singlePatient).length > 0) {
      setNombre(singlePatient.nombre)
      setApellidos(singlePatient.apellidos)
    }
  }, [singlePatient]) 

  const handleSubmit = (e) => {
    e.preventDefault()

    const createId = () => {
      const random = Math.random().toString(36).substring(2)
      const date = Date.now().toString(36)

      return date + random      
    }    

    if([nombre, apellidos].includes('')){
      setError(true)  
      return   
    } 

    setError(false)

    const patientInfo = {
      nombre,
      apellidos,
      id: createId()
    }  

    setPatients([...patients, patientInfo])

    setNombre('')
    setApellidos('')
  
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      {error && 'Los campos están vacíos'}
      <input 
        id='nombre'
        type='text'
        className='form-style'
        placeholder='Insertar Nombre'  
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)}     
      />
      <input 
        id='apellidos'
        type='text'
        className='form-style'
        placeholder='Insertar Apellidos'
        value={apellidos}     
        onChange={(e) => setApellidos(e.target.value)}   
      />      
      <input
        id='buttonSubmit' 
        type='submit'
        value='Guardar'
        className='button-form'
      />
    </form>
  )
}

export default PatientForm