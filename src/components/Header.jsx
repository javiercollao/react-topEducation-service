import React from 'react' 
import { Link } from 'react-router-dom'

export default function Header() {
    return ( 
      <div className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item px-3 ">
            <Link to="/">
              <p className="nav-link active">Home</p>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/nuevo_estudiante">
              <p className="nav-link active">Crear Estudiante</p>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/subir_notas">
              <p className="nav-link active">Subir Notas</p>
            </Link>
          </li>
        </ul> 
      </div>
    );
}
