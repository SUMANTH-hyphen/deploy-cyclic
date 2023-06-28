import axios from "axios"
const baseURL = "https://lobster-app-7bbja.ondigitalocean.app/"

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Authorization": localStorage.getItem("token") ? `token ${localStorage.getItem("token")}` : "",
    }
});

export const getVouchers = async () =>{
    try{
        const response =  await instance.get("api/v1/vouchers/")
        console.log(response)
        return {
            response : response?.data
        }
    }catch(error){
        console.log(error, "error at getVouchers")
        return {
			error: error,
		};
    }
}

export const getVoucherData = async (id) =>{
    try{
        const response =  await instance.get(`api/v1/vouchers/${id}/`)
        console.log(response)
        return {
            response : response?.data
        }
    }catch(error){
        console.log(error, "error at getVoucherData")
        return {
			error: error,
		};
    }
}

export const putVoucherData = async (id,data) =>{
    try{
        const response =  await instance.put(`api/v1/vouchers/${id}/`,data)
        console.log(response)
        return {
            response : response?.data
        }
    }catch(error){
        console.log(error, "error at getVoucherData")
        return {
			error: error,
		};
    }
}

export const deleteVoucherData = async (id) =>{
    try{
        const response =  await instance.delete(`api/v1/vouchers/${id}/`)
        console.log(response)
        return {
            response : response?.data
        }
    }catch(error){
        return {
			error: error,
		};
    }
}

export const createVoucherData = async (data) =>{
    try{
        const response =  await instance.post("api/v1/createVoucher/", data)
        console.log(response)
        return {
            response : response?.data
        }
    }catch(error){
        console.log(error, "error at getVoucherData")
        return {
			error: error,
		};
    }
}