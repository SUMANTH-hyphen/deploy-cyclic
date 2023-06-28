import axios from "axios"
const baseURL = "https://lobster-app-7bbja.ondigitalocean.app/"

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Authorization": localStorage.getItem("token") ? `token ${localStorage.getItem("token")}` : "",
    }
});

export const getAttandants = async () =>{
    try{
        const response =  await instance.get("api/v1/attendants/")
        console.log(response)
        return {
            response: response?.data
        }
    }catch(error){
        console.log(error, "error at getAttandants")
        return {
			error: error,
		};
    }
}

export const getAttandantData = async (id) =>{
    try{
        const response =  await instance.get(`api/v1/attendants/${id}/`)
        console.log(response)
        return {
            response: response?.data
        }
    }catch(error){
        console.log(error, "error at getAttandantData")
        return {
			error: error,
		};
    }
}

export const deleteAttandantData = async (id) =>{
    try{
        const response =  await instance.delete(`api/v1/attendants/${id}/`)
        console.log(response)
        return {
            response: response?.data
        }
    }catch(error){
        console.log(error, "error at getAttandantData")
        return {
			error: error,
		};
    }
}

export const putAttandantData = async (id, data) =>{
    try{
        const response =  await instance.put(`api/v1/attendants/${id}/`,data)
        console.log(response)
        return {
            response: response?.data
        }
    }catch(error){
        console.log(error, "error at getAttandantData")
        return {
			error: error,
		};
    }
}

export const createAttandantData = async (data) =>{
    try{
        const response =  await instance.post(`api/v1/createAttendant/`,data)
        console.log(response)
        return {
            response: response?.data
        }
    }catch(error){
        console.log(error, "error at getAttandantData")
        return {
			error: error,
		};
    }
}