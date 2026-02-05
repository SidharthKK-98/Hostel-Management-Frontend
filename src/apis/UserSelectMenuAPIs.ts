import { type FoodSelectionResponse, type DailyMenuSelectPayload, type GetTotalPricePayload, type GetTotalPriceResponse,type DailyMenuDataResponse } from "@/Types/selectDailyMenuTypes"
import commonAPI from "./commonAPI"

export const postSelectedDailyMenu=(payload:DailyMenuSelectPayload)=>{
    return commonAPI<FoodSelectionResponse>("POST",`foodSelction/selctFood`,payload)
}

export const getHistory=()=>{
    return commonAPI<FoodSelectionResponse>("GET","foodSelection/getHistory")
}

export const getTotalPrice=(payload:GetTotalPricePayload)=>{
    return commonAPI<GetTotalPriceResponse>("POST","foodSelction/getByUserId",payload)
}

export const getDailyPortion=(date:Date)=>{
    const formatted = date.toISOString().split("T")[0]
    return commonAPI<DailyMenuDataResponse>("GET",`foodSelction/getByDate?date=${formatted}`)
}