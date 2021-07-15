import axios from 'axios'
import { UseUtil } from '../hooks/useUtil';

let instance = axios.create({
    baseURL: process.env.REACT_APP_DATABASE_URL,
    headers:{ 'Content-Type': 'application/json'}
  })

const {GetToken,IsLogged} = UseUtil();
  instance.interceptors.request.use(function (config) {
    
   if(IsLogged())
      config.headers.Authorization =  `Bearer ${GetToken()}`;
  
    return config;
});

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
   
  
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  
    const genericError = 'Ocorreu um erro não esperado.';
    if(error?.response?.status === undefined){
      console.log("éh undefined");
      return;
    }
   
    switch (error?.response?.status) {
      case 404:
      case 400:
        console.log("erro 404");
       // this.util.errorMsg([].concat(response.error['notifications']));
        break;
      case 401:
        //this.util.snackMsg('Você não está autorizado à acessar esta funcionalidade');
        //this.routeStack.goTo(this.router, '/auth/login');
        break;
      case 403:
        //this.util.snackMsg('Você não possui permissão para acessar esta funcionalidade');
        break;
      default:
        //this.util.snackMsg(genericError);
        break;
    }
 
    return Promise.reject(error);
  });


export const httpInterceptor = instance