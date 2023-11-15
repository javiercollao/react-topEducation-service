import React, { useEffect, useState } from 'react'
import Button from './Button'
import EstudianteService from "./../service/EstudianteService"
import { Link } from 'react-router-dom';

export default function TablaEstudiantes() {
  const [estudianteEntity, setEstudianteEntity] = useState([]); 

  useEffect(() => {
      EstudianteService.getEstudiantes().then((res) => {
          console.log("Response data Estudiante:", res.data);
          setEstudianteEntity(res.data); 
      });
  }, []);

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
                    {
                        estudianteEntity.map((estudiante , i) => (
                            <tr key= {estudiante.rut}>
                                <td> {i+1} </td>
                                <td> {estudiante.nombre} </td>
                                <td> {estudiante.apellidos} </td>
                                <td> {estudiante.rut} </td>
                                <td> {estudiante.categoria_colegio} </td>
                                <td>
                                  <Link to={"/cuotas/"+ estudiante.rut}>
                                    <Button>Ver Cuotas</Button>
                                  </Link>
                                </td> 
                                <td>
                                  <Link to={"/puntajes/"+ estudiante.rut}>
                                    <Button>Ver Puntajes</Button>
                                  </Link>
                                </td>
                                <td>
                                  <Link to={"/reporte/"+ estudiante.rut}>
                                    <Button>Ver Reporte</Button>
                                  </Link>
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
