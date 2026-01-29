import { getDailyMenu } from "@/apis/DailyMenuAPIs"
import { type DailyMenu } from "@/Types/dailyMenuTypes"
import { useQuery } from "@tanstack/react-query"

export const useGetDailyMenu=()=>{

    return useQuery<DailyMenu>({
        queryKey:["DailyMenu"],
        queryFn:getDailyMenu,
        staleTime:1000*60*5
    })

}