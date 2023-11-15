import React from 'react'
import FormularioEstudiante from '../components/FormularioEstudiante'
import Header from '../components/Header'

export default function FormularioCrearEstudiante() {
  return (
    <> 
        <div className='container'>
            <Header />
            <div className="py-3">
                <span class="fs-5">Formulario Nuevo Estudiante</span>
                <FormularioEstudiante />
            </div>
        </div>
    </>
  )
}

