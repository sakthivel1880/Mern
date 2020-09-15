import { logdomain } from './Config';

export const setToken = ( key, val ) =>{
    window.localStorage.setItem("token"+logdomain , val);
}

export const getToken = () =>{
    if(window.localStorage.getItem("token"+logdomain) != undefined)
    return window.localStorage.getItem("token"+logdomain);
    else
    return false;
}

export const Userlogin = () =>{
    if(window.localStorage.getItem("token"+logdomain)){
        return true;
    } else {
        return false;
    }
}

export const removeToken = () =>{
    window.localStorage.removeItem("token"+logdomain);
}