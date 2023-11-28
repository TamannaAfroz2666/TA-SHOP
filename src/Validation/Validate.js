import { regexForEmail, regexForName, regexForPhone } from "../Utilities/regex";

// for login form 
export const LoginValidate = (form) => {
    let err = {}
if (!form.email.trim()){
    err.email = "Your email is required"
}
else if (!regexForEmail.test(form.email)){
    err.email = "Email is not valid"
}
if (!form.password.trim()){
    err.password = "Your password is required"
}
}