import AxiosInstanceEstudiante from "../intercertor/AxiosInstanceEstudiante";

class EstudianteService {
    getEstudiantes(){
        return AxiosInstanceEstudiante.get('/listar');
    }

    getEstudianteByRut(rut){
        return AxiosInstanceEstudiante.get('/obtener/'+ rut);
    }

    crearEstudiante(estudiante){
        return AxiosInstanceEstudiante.post('/crear', estudiante);
    }
}

const estudianteServiceInstance = new EstudianteService();
export default estudianteServiceInstance;
