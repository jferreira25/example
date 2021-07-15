
import * as yup from 'yup';

const loginRequest = yup.object().shape({
    email: yup.string().required('Email é obrigatório'),
    senha: yup.string().required('Senha é obrigatório'),
  })
  export {loginRequest};