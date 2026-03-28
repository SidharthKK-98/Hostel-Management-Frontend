import axios,{AxiosError, type Method} from "axios";

  
  const  baseURL="https://hostel-management-backend-4jyb.onrender.com"


const api = axios.create({
    baseURL,
    withCredentials:true
})


const commonAPI = async <T=unknown>(
    method:Method,
    url:string,
    data?:unknown

):Promise<T>=>{

    try{

        const {data:res} = await api({method,url,data})
        return res

    }
    catch(err:any){
        const axiosError = err as AxiosError<any>
        throw new Error(
            axiosError.response?.data?.message || "request failed"
        )
    }

}

export default commonAPI