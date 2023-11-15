import React from 'react'
import Header from '../components/Header'
import Reporte from '../components/Reporte'
export default function VistaReporte() {
  return (
    <> 
        <div className='container'>
            <Header /> 
            <div className="py-3"> 
                <Reporte />
            </div>
        </div>
    </>
  )
}
