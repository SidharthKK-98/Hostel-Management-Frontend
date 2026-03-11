import { getAuthUser } from "@/apis/authAPIs"
import { useQuery } from "@tanstack/react-query"

export const useAuthUser=()=>{

    return useQuery({
        queryKey:["authUser"],
        queryFn:getAuthUser,
        retry:false,
        staleTime:0,
        gcTime:0
    })

}