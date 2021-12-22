import {$authHost,$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (username, password) => {
    const {data} = await $host.post('api/user/registration',{username,password, roles: 'ADMIN'})
    localStorage.setItem('token',data.token)
    //console.log(data)
    return jwtDecode(data.token)
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/user/login',{username,password})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    console.log(data)
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}