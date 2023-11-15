import AxiosInstanceExamenes from "../intercertor/AxiosInstanceExamenes";
class ExamenService {

    getReporte(rut){
        return AxiosInstanceExamenes.get('/reporte/'+rut);
    }

    getExamenesByRut(rut){
        return AxiosInstanceExamenes.get('/'+ rut);
    }

    postExamenes(file){
        return AxiosInstanceExamenes.post('/upload', file);
    }
 
}
 
const examenServiceInstance = new ExamenService();
export default examenServiceInstance;