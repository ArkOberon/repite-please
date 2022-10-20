import { useState, useEffect} from 'react'

const ClientForm = ({ personas, setPersonas }) => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [riqueza, setRiqueza] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const generarId = () => {
      const random = Math.random().toString(36).substring(2)
      const date = Date.now().toString(36)

      return random + date
    }

    if([nombre, apellidos].includes('') || riqueza <= 0) {
      setError(true)
      return
    }

    setError(false)

    const cliente = {
      nombre,
      apellidos,
      riqueza,
      id: generarId()
    }

    setPersonas([...personas, cliente])    
    
    setNombre('')
    setApellidos('')
    setRiqueza(0)

  }

  return (
    <>      
      <h1>Formulario Cliente</h1>
      <form
        onSubmit={handleSubmit}
      >
        {error && 'hay campos vacios'}
        <input 
          id='nombre'
          type='text'
          className='form'
          placeholder='Tu nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input 
          id='apellidos'
          type='text'
          className='form'
          placeholder='Tus apellidos'
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <input 
          id='riqueza'
          type='number'
          className='form'
          placeholder='Dinero total que tienes'
          value={riqueza}
          onChange={(e) => setRiqueza(Number(e.target.value))}
        />
        <input 
          id='submit'
          type='submit'
          className='form'
          value='Guardar'
        />
      </form>
    </>
  )
}

export default ClientForm