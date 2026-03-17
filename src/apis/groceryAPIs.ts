import {type GroceryResponse, type AddGroceryParams, type GetGroceryResponse, type RestoreGroceryParam } from "@/Types/grocerytypes";
import commonAPI from "./commonAPI";


export const addGrocery=(payload:AddGroceryParams)=>{
    return commonAPI<GroceryResponse>("POST","grocery/add",payload)
}

export const getGrocery=()=>{
    return commonAPI<GetGroceryResponse>("GET","grocery/getItems")
}

export const restoreGrocery=(payload:RestoreGroceryParam)=>{
    return commonAPI<GroceryResponse>("PATCH","grocery/restore",payload)
}