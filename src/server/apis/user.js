import axios from "axios"

export const createUser = async (data)=>{
return await axios.post('/createUser',data)
} 

export const loginUser = async(data)=>{
    return await axios.post('/loginUser',data)
}