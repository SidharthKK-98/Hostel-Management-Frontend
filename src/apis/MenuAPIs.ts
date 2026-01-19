import {type SaveFoodItemResponse, type AddFoodItemsParams,type FoodMenuResponse } from "@/Types/MenuItemsTypes";
import commonAPI from "./commonAPI";

export const addMenu=(payload:AddFoodItemsParams)=>{

    const formData = new FormData()
    formData.append("name",payload.name)
    formData.append("price",payload.price.toString())
    formData.append("foodImg",payload.foodImg)
    return commonAPI<SaveFoodItemResponse>("POST","foodMenu/addFoodItem",formData)
}

export const getFoodMenu=()=>{
    return commonAPI<FoodMenuResponse>("GET","foodMenu/getFoodItems")
}