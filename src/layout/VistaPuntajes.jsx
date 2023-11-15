import React from 'react'
import Header from '../components/Header'
import TablaPuntajes from '../components/TablaPuntajes'

export default function VistaPuntajes() {
  return (
    <> 
        <div className='container'>
            <Header />
            <div className="py-3">
                <span class="fs-5">Puntajes de Javier Collao</span>
                <TablaPuntajes />   
            </div>
        </div>
    </>
  )
}
