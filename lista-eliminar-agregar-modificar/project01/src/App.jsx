import { useState } from 'react'
import Header from './components/Header'
import PatientList from './components/PatientList'
import PatientForm from './components/PatientForm'
import './app.css'

function App() {  

  return (
    <>
      <Header />
      <PatientForm />
      <PatientList />
    </>
  )
}

export default App
