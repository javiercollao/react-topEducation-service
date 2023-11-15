import React, { useState } from 'react'
import EstudianteService from "./../service/EstudianteService"

export default function FormularioEstudiante() {
  const [estudiante, setEstudiante] = useState({
    rut: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    anio_egreso: '',
    nombre_colegio: '',
    categoria_colegio: '',
    metodo_pago: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({ ...estudiante, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    EstudianteService.crearEstudiante(estudiante) // Llama al método crearEstudiante directamente con el estudiante como parámetro
    .then((response) => { 
      console.log('Estudiante creado:', response.data);
    })
    .catch((error) => { 
      console.error('Error al crear el estudiante:', error);
    });
  };
 
  return (
    <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="row col-md-6 col-lg-5"> 
          <div className='py-5'>
            
            <div className="modal-body">
                    <div className="row">

                      <div className="col-sm-6">
                        <label for="nombre" className="form-label">Nombres</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          value={estudiante.nombre}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Requerido
                        </div>
                      </div>
          
                      <div className="col-sm-6">
                        <label for="apellidos" className="form-label">Apellidos</label>
                        <input 
                          type="text" 
                          name="apellidos" 
                          className="form-control" 
                          id="apellidos"
                          value={estudiante.apellidos}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                           Requerido
                        </div>
                      </div>
          
                      <div className="col-6 mt-1">
                        <label for="rut" className="form-label">RUT</label>
                        <div className="input-group has-validation"> 
                          <input 
                            type="text" 
                            name="rut" 
                            className="form-control" 
                            id="rut" 
                            placeholder="Sin puntos ni guión" 
                            value={estudiante.rut}
                            onChange={handleChange}
                            required
                          />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>

                      <div className="col-6 mt-1">
                        <label for="anoEgreso" className="form-label">Año Egreso</label>
                        <div className="input-group has-validation"> 
                          <input 
                            type="number" 
                            name="anio_egreso" 
                            className="form-control" 
                            id="anio_egreso" 
                            value={estudiante.anio_egreso}
                            onChange={handleChange}
                            required
                          />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mt-1">
                        <label for="fechaNacimiento" className="form-label">Fecha Nacimiento</label>
                        <div className="input-group has-validation"> 
                          <input 
                            type="date" 
                            name="fecha_nacimiento" 
                            className="form-control" 
                            id="fecha_nacimiento" 
                            value={estudiante.fecha_nacimiento}
                            onChange={handleChange}
                            required
                          />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-1">
                        <label for="nombreColegio" className="form-label">Nombre Colegio</label>
                        <div className="input-group has-validation"> 
                          <input 
                            type="text" 
                            name="nombre_colegio" 
                            className="form-control" 
                            id="nombre_colegio" 
                            value={estudiante.nombre_colegio}
                            onChange={handleChange}
                            required
                          />
                        <div className="invalid-feedback">
                            Requerido
                          </div>
                        </div>
                      </div>
          
                      <div className="col-md-6 mt-1">
                        <label for="idCategoria" className="form-label">Tipo Colegio</label>
                        <select
                          className="form-select"
                          id="categoria_colegio"
                          name="categoria_colegio"
                          value={estudiante.categoria_colegio}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccionar Categoría</option>
                          <option value="Municipal">Municipal</option>
                          <option value="Subvencionado">Subvencionado</option>
                          <option value="Privado">Privado</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-6 mt-1">
                        <label for="idMetodoPago" className="form-label">Metodo de Pago</label>
                        <select
                          className="form-select"
                          id="metodo_pago"
                          name="metodo_pago"
                          value={estudiante.metodo_pago}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccionar Metodo de pago</option>
                          <option value="Contado">Contado</option>
                          <option value="Cuotas">Cuotas</option> 
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
        </form> 
    </div>
  )
}
