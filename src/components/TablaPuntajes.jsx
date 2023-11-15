import React, { useEffect, useState } from 'react'
import ExamenService from "./../service/ExamenService"
import { useParams } from 'react-router-dom';

export default function TablaPuntajes() {
  const [examenEntity, setExamenEntity] = useState([]); 
  const { id } = useParams();
  
  useEffect(() => {
      ExamenService.getExamenesByRut(id).then((res) => {
          console.log("Response data Estudiante:", res.data);
          setExamenEntity(res.data); 
      });
  }, [id]);

  return (
    <>
         <div class="py-3">
            <table class="table table-hover">
                <thead>
                  <tr> 
                    <th>Nro.</th>
                    <th>Fecha</th>
                    <th>Puntaje</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        examenEntity.map((puntaje , i) => (
                            <tr key= {puntaje.id_examen}>
                                <td> {i+1} </td>
                                <td> {puntaje.fecha} </td>
                                <td> {puntaje.puntaje} </td> 
                            </tr>
                        ))
                    }
                </tbody>
              </table>
        </div>
    </>
  )
}
