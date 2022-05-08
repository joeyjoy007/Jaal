import axios from "axios";
import { Storage } from "../../storage";

const cartAxios = axios.create({
    baseURL:"http://192.168.1.156:4000"
})

cartAxios.interceptors.request.use(async config=>{
    config.headers.Authorization = `Bearer ${await Storage.getItem("token")}`
    return config
},
error=>{
    return Promise.reject(error)
})

export const createCart = async(data)=>{
    return await cartAxios.post('/createCart',data)
}

export const getCartItems = async()=>{
    return await cartAxios.get('/fetchCart')
}

export const addAnotherProduct = async(data)=>{
    
    return await cartAxios.post('/addAnother',data)
}