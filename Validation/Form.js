import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    Email: yup.string().email("Por favor insira um Email valido"),
    Password: yup.string().min(8,({min})=> `Senha deve ter no minimo ${min} digitos`)
})

export const cadastroValidationScheme= yup.object().shape({
    Email: yup.string().email("Por favor insira um Email valido"),
    Password: yup.string().min(8,({min})=> `Senha deve ter no minimo ${min} digitos`),
    CPF: yup.string().min (11, ({min})=> `Coloque um CPF valido com no minimo ${min} digitos`)
})