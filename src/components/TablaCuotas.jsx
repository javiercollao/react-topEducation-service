import React from 'react'
import Button from './Button'

export default function TablaCuotas() {
  return (
    <>
         <div class="py-3">
            <table class="table table-hover">
                <thead>
                  <tr> 
                    <th>Nro.</th>
                    <th>Asunto</th>
                    <th>Status</th>
                    <th>Monto</th> 
                    <th>Fecha Inicio</th> 
                    <th>Ultimo plazo</th> 
                    <th>Pagar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td> 
                    <td>Matricula</td> 
                    <td>Pendiente</td> 
                    <td>20000</td>
                    <td>15-16-2023</td>
                    <td>15-16-2023</td> 
                    <td>
                        <Button>Pagar</Button>
                    </td>   
                  </tr>
                </tbody>
              </table>
        </div>
    </>
  )
}
