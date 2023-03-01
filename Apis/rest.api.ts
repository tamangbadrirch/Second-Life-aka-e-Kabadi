import axios from "axios"
const baseurl:string='http://localhost:5000'

//For Get Method : for reading data
const asyncGet=async(api:string, option?:any)=>{
try{
const response= await axios.get(baseurl+api,option) //get axios instance
return{data:response.data} //return data from instance 
}
catch(e:any)
{
    return{
error:e?.response?.data?e?.response.data:e?.response // for error handling
    }
}
}

//For Post Method : for posting data
const asyncPost=async(api:string, payload:any, option?:any)=>{
    try{
    const response= await axios.get(baseurl+api,payload,option) //get axios instance
    return{data:response.data} //return data from instance 
    }
    catch(e:any){
        return{
    error:e?.response?.data?e?.response.data:e?.response // for error handling
        }
    }
    }
    
//For Put Method for loading data
const asyncPut=async(api:string, payload:any, option?:any)=>{
    try{
    const response= await axios.get(baseurl+api,payload,option) //get axios instance
    return{data:response.data} //return data from instance 
    }
    catch(e:any){
        return{
    error:e?.response?.data?e?.response.data:e?.response // for error handling
        }
    }
    }

 //For Delete Method for loading data
const asyncDelete=async(api:string)=>{
    try{
    const response= await axios.get(baseurl+api) //get axios instance
    return{data:response.data} //return data from instance 
    }
    catch{(e:any){
        return{
    error:e?.response?.data?e?.response.data:e?.response // for error handling
        }
    }
    }   

