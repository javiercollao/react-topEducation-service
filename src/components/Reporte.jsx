import React, { useEffect, useState } from 'react'
import ExamenService from "./../service/ExamenService"
import { useParams } from 'react-router-dom';

export default function Reporte() {
  const [reporteEntity, setReporteEntity] = useState([]); 
  const { id } = useParams();
  
  useEffect(() => {
      ExamenService.getReporte(id).then((res) => {
          console.log("Response data Estudiante:", res.data);
          setReporteEntity(res.data); 
      });
  }, [id]);

  return (
    <div className="container">
        <main>
            <div>
                 <div className="py-5 text-center"> 
                    <h2>{reporteEntity.rut}</h2>
                    <p className="lead">Reporte de estudiante</p>
                    </div>
                    <div className="row justify-content-center">
                        
                        <div className="col-md-12 col-lg-6 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Datos Estudiante</span> 
                            </h4>
                            <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                <h6 className="my-0">Rut</h6> 
                                </div>
                                <span className="text-body-secondary">{reporteEntity.rut}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                <h6 className="my-0">Nombre</h6> 
                                </div>
                                <span className="text-body-secondary">{reporteEntity.nombre}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                <h6 className="my-0">Apellidos</h6> 
                                </div>
                                <span className="text-body-secondary">{reporteEntity.apellido}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                                <div className="text-success">
                                <h6 className="my-0">Método de Pago</h6> 
                                </div>
                                <span className="text-success">{reporteEntity.tipo_pago}</span>
                            </li>
                            </ul>
                        </div> 
                        <div className="col-md-12 col-lg-6 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Datos Cuotas</span> 
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0">Cuotas pactadas</h6> 
                                    </div>
                                    <span className="text-body-secondary">{reporteEntity.cuotas_pactadas}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0">Monto total arancel</h6> 
                                    </div>
                                    <span className="text-body-secondary">${reporteEntity.monto_total_arancel}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0">Total pagado</h6> 
                                    </div>
                                    <span className="text-body-secondary">${reporteEntity.total_pagado}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                                    <div className="text-success">
                                    <h6 className="my-0">Saldo por pagar</h6> 
                                    </div>
                                    <span className="text-success">${reporteEntity.saldo_por_pagar}</span>
                                </li>
                            </ul>
                        </div> 
                        <div className="col-md-12 col-lg-6 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Datos Puntajes</span> 
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0">Exámenes rendidos</h6> 
                                    </div>
                                    <span className="text-body-secondary">{reporteEntity.numero_examenes_rendidos}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0">Promedio</h6> 
                                    </div>
                                    <span className="text-body-secondary">{reporteEntity.promedio}</span>
                                </li>
                            </ul>
                        </div>
                    </div> 
            </div>
        </main>
    </div>
  )
}
