import React, { useEffect, useState } from 'react' 
import CuotasService from "./../service/CuotasService"
import { useParams } from 'react-router-dom';

export default function TablaCuotas() {
  const [cuotaEntity, setCuotaEntity] = useState([]); 
  const { id } = useParams();
   
  useEffect(() => {
      CuotasService.getCuotasPendientes(id).then((res) => {
          console.log("Response data Estudiante:", res.data);
          setCuotaEntity(res.data); 
      });
  }, [id]);

  const handlePagarCuota = (idCuota) => {
     CuotasService.putPagarCuota(idCuota);
     CuotasService.getCuotasPendientes(id).then((res) => {
      console.log("Response data Estudiante:", res.data);
      setCuotaEntity(res.data); 
    });
  };

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
                {
                        cuotaEntity.map((cuota , i) => (
                            <tr key= {cuota.id_cuota}>
                                <td> {i+1} </td>
                                <td> {cuota.asunto} </td>
                                <td> {cuota.status_cuota} </td>
                                <td> {cuota.valor_cuota} </td>
                                <td> {cuota.fecha_inicio_pagar} </td>
                                <td> {cuota.fecha_inicio_deuda} </td>
                                <td>  
                                    {cuota.status_cuota !== 'Pagado' && (
                                      <button className='btn btn-secondary' onClick={() => handlePagarCuota(cuota.id_cuota)}>
                                        Pagar
                                      </button>
                                    )}
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>
              </table>
        </div>
    </>
  )
}
