import React from 'react'
import Patient from './Patient'

const PatientList = ({patients, setSinglePatient}) => {
  return (
    <>
      {
        patients.map((patient) => (
          <Patient 
            key={patient.id}
            patient={patient}
            setSinglePatient={setSinglePatient}
          />
        ))
      }
      
    </>   
  )
}

export default PatientList