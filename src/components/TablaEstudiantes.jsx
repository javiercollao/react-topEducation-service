import React from 'react'
import Button from './Button'

export default function TablaEstudiantes() {
  return (
    <>
     <div class="py-3">
            <table class="table table-hover">
                <thead>
                  <tr> 
                    <th>Nro.</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th> 
                    <th>Tipo</th>  
                    <th>Cuotas</th>
                    <th>Puntajes</th>
                    <th>Reporte</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td> 
                    <td>Javier</td> 
                    <td>Collao</td> 
                    <td>20.789.456-K</td>
                    <td>Municipal</td> 
                    <td>
                        <Button>Ver Cuotas</Button>
                    </td> 
                    <td>
                        <Button>Ver Puntajes</Button>
                    </td> 
                    <td>
                        <Button>Ver Reporte</Button>
                    </td> 
                     
                  </tr>
                </tbody>
              </table>
        </div>

    </>
  )
}
