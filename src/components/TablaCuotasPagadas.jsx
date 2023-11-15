import React from 'react'

export default function TablaCuotasPagadas() {
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td> 
                    <td>Matricula</td> 
                    <td>Pagado</td> 
                    <td>20000</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </>
  )
}
