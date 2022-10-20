import { useState } from 'react'
import Header from './components/Header'
import ClientList from './components/ClientList'
import ClientForm from './components/ClientForm'

function App() {
  const [personas, setPersonas] = useState([])

  return (
    <>      
      <div className='form'>     
        <Header />        
        <ClientForm 
          personas={personas}
          setPersonas={setPersonas}
        />  
        <ClientList 
          personas={personas}
        />    
      </div>
    </>
  )
}

export default App
