import { addTotalRooms } from "@/apis/hostelConfigAPI"
import {  useMutation, useQueryClient } from "@tanstack/react-query"


export const useAddTotalRooms=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:addTotalRooms,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["hostelConfig"]

            })
        },
        onError:(error)=>{
            console.error("failed to add rooms",error);
            
        }
    })
}