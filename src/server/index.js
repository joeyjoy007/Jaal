import axios from "axios";
import { Platform } from "react-native";
import { Storage } from "../storage";

const apiEndPoint = Platform.OS === "ios" ? "http://localhost:4000" : "http://192.168.1.156:4000"

const handleError = (err)=>{
    const message = ""
    const {data} = err.response
    message = data.message
    return Promise.reject({message})

}

function isNetworkError(err) {
    return !!err.isAxiosError && !err.response;
}

export const  initializeAxios=async()=>{
    
    axios.defaults.baseURL = apiEndPoint
    axios.defaults.headers.common['Authorization'] = await Storage.getItem("token"),
    console.log("axios default endPointSet set")
    console.log(axios.interceptors.request.handlers,axios.interceptors.response.handlers)

    if(axios.interceptors.request.handlers.length === 0){
        axios.interceptors.response.use(
            (response)=>{
                console.log("Request completed")
                return response.data
            },
            (error)=>{
                if(isNetworkError(err)){
                    const message = "Network error"
                    return Promise.reject({message})
                }
                else{
                    handleError(err)
                }
            }
            
        )
}
}

