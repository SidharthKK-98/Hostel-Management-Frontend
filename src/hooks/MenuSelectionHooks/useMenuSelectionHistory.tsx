import { getHistory } from "@/apis/UserSelectMenuAPIs"
import { useQuery } from "@tanstack/react-query"

export const useMenuSelectionHistory=()=>{

    return useQuery({
        queryKey:["selectedDailyMenu"],
        queryFn:async()=>{
            const response = await getHistory()
            return response
        }
    })

}