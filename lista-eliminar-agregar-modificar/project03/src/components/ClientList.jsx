import React from 'react'
import Cliente from './Cliente'

const ClientList = ({ personas }) => {
  return (
    <>
      <div className='form-list'>
        <h1>Listado de clientes</h1>   
        {
          personas.map((person => (
            <Cliente 
              key={person.id}
              person={person}
            />
          )))
        }
      </div>      
    </>
  )
}

export default ClientList
