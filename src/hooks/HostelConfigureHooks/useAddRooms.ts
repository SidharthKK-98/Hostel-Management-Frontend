import { addRooms } from "@/apis/hostelConfigAPI"
import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useAddRooms=()=>{

  const  queryClient = useQueryClient()

    return useMutation({
        mutationFn:addRooms,
        onSuccess:(data)=>{
                toast.success(data.message)
                queryClient.invalidateQueries({
                queryKey:["hostelConfig"]

            })
        },
           onError:(error)=>{
            console.error("failed to add rooms",error);
            
        }
    })

}