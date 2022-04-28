import axios from "axios";
import { Storage } from "../../storage";


const productAxios = axios.create({
    baseURL:"http://192.168.1.156:4000",
   
   
})

productAxios.interceptors.request.use(async config=>{
    config.headers.Authorization = `Bearer ${await Storage.getItem("token")}`
    return config
},
error=>{
    return Promise.reject(error)
})


export const getAllProducts = async()=>{
 
    return await productAxios.get('/fetchAllProducts')
}