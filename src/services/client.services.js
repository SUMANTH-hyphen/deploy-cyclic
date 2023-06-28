import axios from "axios"
const baseURL = "https://lobster-app-7bbja.ondigitalocean.app/"

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Authorization": localStorage.getItem("token") ? `token ${localStorage.getItem("token")}` : "",
    }
});

export const getClients = async () =>{
    try{
        const response =  await instance.get("api/v1/clients/")
        console.log(response)
        return {
            response :   response?.data
        }
    }catch(error){
        console.log(error, "error at getClients")
        return {
			error: error,
		};
    }
}

export const getClientData = async (id) =>{
    try{
        const response =  await instance.get(`api/v1/client/${id}/`)
        console.log(response)
        return {
            response :   response?.data
        }
    }catch(error){
        console.log(error, "error at getClientData")
        return {
			error: error,
		};
    }
}

export const putClientData = async (id, data) =>{
    try{
        const response =  await instance.put(`api/v1/client/${id}/`,data)
        console.log(response)
        return {
            response :   response?.data
        }
    }catch(error){
        console.log(error, "error at putClientData")
        return {
			error: error,
		};
    }
}

export const deleteClientData = async (id) =>{
    try{
        const response =  await instance.delete(`api/v1/client/${id}/`)
        console.log(response)
        return {
            response :   response?.data
        }
    }catch(error){
        console.log(error, "error at deleteClientData")
        return {
			error: error,
		};
    }
}

export const createClientData = async (data) =>{
    try{
        const response =  await instance.post(`api/v1/createClient/`,data)
        console.log(response)
        return {
            response :   response?.data
        }
    }catch(error){
        console.log(error, "error at deleteClientData")
        return {
			error: error,
		};
    }
}