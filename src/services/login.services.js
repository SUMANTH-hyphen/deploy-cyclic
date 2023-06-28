import axios from "axios"
const baseURL = "https://lobster-app-7bbja.ondigitalocean.app/"

export const instance = axios.create({
    baseURL: baseURL
});

export const LoginService = async (data) =>{
    try{
        const response =  await instance.post("api-token-auth/",data)
        console.log(response)
        return {
            token : response?.data?.token
        }
    }catch(error){
        console.log(error, "error at LoginSerivce")
        return error;
    }
}