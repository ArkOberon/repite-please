import { useState } from 'react'
import Header from './components/Header'
import PatientForm from './components/PatientForm'
import PatientList from './components/Patientlist'

import './App.css'

function App() {
  const [patients, setPatients] = useState([])
  const [singlePatient, setSinglePatient] = useState({})

  return (
    <> 
      <Header />
      <PatientForm 
        patients={patients}
        setPatients={setPatients}
        singlePatient={singlePatient}
      />
      <PatientList 
        patients={patients}
        setSinglePatient={setSinglePatient}
      />      
    </>
  )
}

export default App
