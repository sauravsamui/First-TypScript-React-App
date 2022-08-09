
import axios, { AxiosResponse } from "axios";

export type InputDetails = {
    model:string;
    year:number;
    os:string;
    screenHeight:number;
    screenWeidth:number;
    price:number;
    id:string
}

export type OutputDetails={
    id:string;
    model:string;
    year:number;
    os:string;
    screenHeight:number;
    screenWeidth:number;
    price:number;
    
}

export const getDetails = async() =>{
    let r:AxiosResponse<OutputDetails[]> = await axios.get("http://localhost:8080/laptops")
   return r.data
}

export const postDetails = async(detail:InputDetails)=>{
    let r:AxiosResponse<InputDetails> = await axios.post("http://localhost:8080/laptops",detail)
    return r.data
}