import { getRoomSummary } from "@/apis/hostelConfigAPI"
import { useQuery } from "@tanstack/react-query"

export const useGetSummary = ()=>{
    return useQuery({
        queryKey:["hostelConfig","summary"],
        queryFn:getRoomSummary,
        staleTime:60*1000
    })
}