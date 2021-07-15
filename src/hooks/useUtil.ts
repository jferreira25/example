export function UseUtil(){
const apiKey = process.env.REACT_APP_API_KEY || "";

    function GetToken(){
        var token = localStorage.getItem(apiKey);
        return token;
    }

    function IsLogged(){
        return !!GetToken();
    }

    function SetToken(token:string){
        if(token){
            localStorage.removeItem(apiKey);
            localStorage.setItem(apiKey, token);
        }
    }

    function Logout(){
        localStorage.removeItem(apiKey);
      }

    return {GetToken,IsLogged,SetToken,Logout};
}