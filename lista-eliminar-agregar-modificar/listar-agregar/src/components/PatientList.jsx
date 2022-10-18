import React from 'react'
import Patient from './Patient'

const PatientList = ({patients}) => {
  return (
    <>
      {
        patients.map((patient) => (
          <Patient 
            patient={patient}
          />
        ))
      }
      
    </>   
  )
}

export default PatientList