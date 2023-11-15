import React from 'react'
import Header from '../components/Header'
import TablaEstudiantes from '../components/TablaEstudiantes'

export default function Home() {
  return (
    <> 
        <div className='container'>
            <Header />
            <div className="py-3">
                <span class="fs-5">Registros de Estudiantes</span>
                <TablaEstudiantes />
            </div>
        </div>
    </>
  )
}
