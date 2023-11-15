import AxiosInstanceCoutas from "../intercertor/AxiosInstanceCuotas";
class CuotasService {

    getCuotasPendientes(rut){
        return AxiosInstanceCoutas.get('/listar/'+ rut);
    }

    getCuotasPagadas(rut){
        return AxiosInstanceCoutas.get('/listarpagadas/'+ rut);
    }
    
    putPagarCuota(id){
        return AxiosInstanceCoutas.put('/pagar/'+ id);
    } 
}
 
const cuotaServiceInstance = new CuotasService();
export default cuotaServiceInstance;