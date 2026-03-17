import { getGrocery } from "@/apis/groceryAPIs"
import { useQuery } from "@tanstack/react-query"


export const useGetGrocery = ()=>{

    return useQuery({
        queryKey:["groceries"],
        queryFn:getGrocery,
        staleTime:60*1000,

        select: (data) => data.data

    })

}