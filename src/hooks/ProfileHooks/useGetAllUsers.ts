import { getAllUsers } from "@/apis/authAPIs"
import {type GetUsersResponse } from "@/Types/authTypes"
import { useQuery } from "@tanstack/react-query"

export const useGetAllUsers =()=>{


    return useQuery<GetUsersResponse>({
        queryKey:["user"],
        queryFn:getAllUsers,
        staleTime: 1000 * 60 * 5,
        

    })

}