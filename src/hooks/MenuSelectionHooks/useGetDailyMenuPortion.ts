import { getDailyPortion } from "@/apis/UserSelectMenuAPIs"
import { useQuery } from "@tanstack/react-query"

export const useDailyMenuPortion = (date:Date)=>{

    return useQuery({
        queryKey:["daily-portion",date?.toDateString().split("T")[0]],
        queryFn:()=>getDailyPortion(date),
        enabled: !!date
    })

}