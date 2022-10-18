import { useState } from 'react'
import Header from './components/Header'
import PatientForm from './components/PatientForm'
import PatientList from './components/PatientList'

import './App.css'

function App() {   
  
  const [patients, setPatients] = useState([]);

  return (
    <>  
      <Header />
      <PatientForm 
        patients={patients}
        setPatients={setPatients}        
      />
      <PatientList
        patients={patients}
      />
    </>      
  )
}

export default App
