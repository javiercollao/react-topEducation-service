import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TablaPuntajes from '../components/TablaPuntajes'
import { useParams } from 'react-router-dom';
import EstudianteService from "./../service/EstudianteService"
export default function VistaPuntajes() { 
  
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
            <div className="py-3">
                <span class="fs-5">Puntajes de {estudianteEntity.nombre} {estudianteEntity.apellidos}</span>
                <TablaPuntajes />   
            </div>
        </div>
    </>
  )
}
