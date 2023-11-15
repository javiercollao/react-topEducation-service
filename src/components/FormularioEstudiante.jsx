import React from 'react'

export default function FormularioEstudiante() {
  return (
    <div className="container d-flex justify-content-center">
        <div className="row col-md-6 col-lg-5"> 
          <div className='py-5'>
            
            <div className="modal-body">
                    <div className="row">

                      <div className="col-sm-6">
                        <label for="nombre" className="form-label">Nombres</label>
                        <input type="text" name="nombre" className="form-control" id="nombre" placeholder="" value="" required="" />
                        <div className="invalid-feedback">
                          Requerido
                        </div>
                      </div>
          
                      <div className="col-sm-6">
                        <label for="apellidos" className="form-label">Apellidos</label>
                        <input type="text" name="apellidos" className="form-control" id="apellidos" placeholder="" value="" required="" />
                        <div className="invalid-feedback">
                           Requerido
                        </div>
                      </div>
          
                      <div className="col-6 mt-1">
                        <label for="rut" className="form-label">RUT</label>
                        <div className="input-group has-validation"> 
                          <input type="text" name="rut" className="form-control" id="rut" placeholder="Sin puntos ni guión" required="" />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>

                      <div className="col-6 mt-1">
                        <label for="anoEgreso" className="form-label">Año Egreso</label>
                        <div className="input-group has-validation"> 
                          <input type="text" name="anoEgreso" className="form-control" id="anoEgreso" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mt-1">
                        <label for="fechaNacimiento" className="form-label">Fecha Nacimiento</label>
                        <div className="input-group has-validation"> 
                          <input type="date" name="fechaNacimiento" className="form-control" id="fechaNacimiento" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-1">
                        <label for="nombreColegio" className="form-label">Nombre Colegio</label>
                        <div className="input-group has-validation"> 
                          <input type="text" name="nombreColegio" className="form-control" id="nombreColegio" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
          
                      <div className="col-md-6 mt-1">
                        <label for="idCategoria" className="form-label">Tipo Colegio</label>
                        <select className="form-select"  name="idCategoria" id="idCategoria" required=""> 
                          <option>Seleccionar Categoría</option>
                          <option>Municipal</option>
                          <option>Subvencionado</option>
                          <option>Privado</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-6 mt-1">
                        <label for="idMetodoPago" className="form-label">Metodo de Pago</label>
                        <select className="form-select" name="idMetodoPago" id="idMetodoPago" required="">
                          <option>Seleccionar Metodo de pago</option>
                          <option>Contado</option>
                          <option>Cuotas</option> 
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                    </div> 
            </div>
            <div className="modal-footer py-5">
               <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </div>
         </div> 
    </div>
  )
}
