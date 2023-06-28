import axios from "axios"
const baseURL = "https://lobster-app-7bbja.ondigitalocean.app/"

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Authorization": localStorage.getItem("token") ? `token ${localStorage.getItem("token")}` : "",
    }
});

export const getTransactions = async () =>{
    try{
        const response =  await instance.get("api/v1/transactions/")
        console.log(response)
        return {
            response :  response?.data
        }
    }catch(error){
        console.log(error, "error at getTransactions")
        return {
			error: error,
		};
    }
}

export const getTransactionData = async (id) =>{
    try{
        const response =  await instance.get(`api/v1/transactions/${id}/`)
        console.log(response)
        return {
            response :  response?.data
        }
    }catch(error){
        console.log(error, "error at getTransactionData")
        return {
			error: error,
		};
    }
}

export const putTransactionData = async (id, data) =>{
    try{
        const response =  await instance.put(`api/v1/transactions/${id}/`,data)
        console.log(response)
        return {
            response :  response?.data
        }
    }catch(error){
        console.log(error, "error at getTransactionData")
        return {
			error: error,
		};
    }
}

export const deleteTransactionData = async (id) =>{
    try{
        const response =  await instance.delete(`api/v1/transactions/${id}/`)
        console.log(response)
        return {
            response :  response?.data
        }
    }catch(error){
        console.log(error, "error at getTransactionData")
        return {
			error: error,
		};
    }
}

export const createTransactionData = async (data) =>{
    try{
        const response =  await instance.post("api/v1/createTransaction/",data)
        console.log(response)
        return {
            response :  response?.data
        }
    }catch(error){
        console.log(error, "error at getTransactionData")
        return {
			error: error,
		};
    }
}