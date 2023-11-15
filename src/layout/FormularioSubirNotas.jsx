import React from 'react'
import FormularioNotas from '../components/FormularioNotas'
import Header from '../components/Header'

export default function FormularioSubirNotas() {
  return (
    <> 
        <div className='container'>
            <Header />
            <div className="py-3">
                <span class="fs-5">Formulario Puntajes</span>
                <FormularioNotas />
            </div>
        </div>
    </>
  )
}
