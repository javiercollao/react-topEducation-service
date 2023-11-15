import React from 'react'

export default function Reporte() {
  return (
    <div className="container">
        <main>
            <div className="py-5 text-center"> 
            <h2>191772466</h2>
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
                        <span className="text-body-secondary">191772466</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                        <h6 className="my-0">Nombre</h6> 
                        </div>
                        <span className="text-body-secondary">Javier</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                        <h6 className="my-0">Apellidos</h6> 
                        </div>
                        <span className="text-body-secondary">Collao Callpa</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                        <div className="text-success">
                        <h6 className="my-0">Método de Pago</h6> 
                        </div>
                        <span className="text-success">Cuotas</span>
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
                            <span className="text-body-secondary">8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Monto total arancel</h6> 
                            </div>
                            <span className="text-body-secondary">$1000101001</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Total pagado</h6> 
                            </div>
                            <span className="text-body-secondary">$543433</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                            <div className="text-success">
                            <h6 className="my-0">Saldo por pagar</h6> 
                            </div>
                            <span className="text-success">5</span>
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
                            <span className="text-body-secondary">8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Promedio</h6> 
                            </div>
                            <span className="text-body-secondary">844</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </main>
    </div>
  )
}
