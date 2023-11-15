import React from 'react'
import Header from '../components/Header'
import TablaCuotas from '../components/TablaCuotas'
import TablaCuotasPagadas from '../components/TablaCuotasPagadas'

export default function VistaCuotas() {
  return (
    <> 
        <div className='container'>
            <Header />
            <div class="py-3">
                <span class="fs-5">Cuotas Pendientes</span>
                <TablaCuotas />
            </div>
            <div class="py-3">
                <span class="fs-5">Cuotas Pagadas</span>
                <TablaCuotasPagadas />
            </div>
        </div>
    </>
  )
}
