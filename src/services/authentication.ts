import { httpInterceptor } from '../contexts/HttpInterceptor'
import { UseUtil } from '../hooks/useUtil';

const {SetToken} = UseUtil();

 export  async function Post<ILoginResponse>(login:any){
    var loginResponse;

    let response = await httpInterceptor.post('/authentication/login',login);
    
    loginResponse = response?.data
      
    if(loginResponse?.token)
      SetToken(loginResponse.token);
      
    return loginResponse as ILoginResponse;
 }

