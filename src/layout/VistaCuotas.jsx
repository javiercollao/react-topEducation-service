import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TablaCuotas from '../components/TablaCuotas' 
import EstudianteService from "./../service/EstudianteService"
import { useParams } from 'react-router-dom'

export default function VistaCuotas() {
  const [estudianteEntity, setEstudianteEntity] = useState([]); 
  const { id } = useParams();

  useEffect(() => {
      EstudianteService.getEstudianteByRut(id).then((res) => {
          console.log("Response data Estudiante:", res.data);
          setEstudianteEntity(res.data); 
      });
  }, [id]);


  return (
    <> 
        <div className='container'>
            <Header />
            <div class="py-3">
                <span class="fs-5">Cuotas de {estudianteEntity.nombre} {estudianteEntity.apellidos}</span>
                <TablaCuotas />
            </div>
        </div>
    </>
  )
}
