import axios from 'axios';

const AxiosInstanceExamenes = axios.create({
    baseURL:"http://localhost:8080/examenes",
});

AxiosInstanceExamenes.interceptors.request.use(
    (request) => {
      if (request.data instanceof FormData) {
        // Si el tipo de datos es FormData (es decir, envío de archivos), no establecer Content-Type manualmente
        return request;
      }
      request.headers['Content-Type'] = 'application/json';
      return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)})
    
export default AxiosInstanceExamenes;