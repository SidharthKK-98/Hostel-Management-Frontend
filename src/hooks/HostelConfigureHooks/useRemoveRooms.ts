import { removeRooms } from "@/apis/hostelConfigAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useRemoveRooms=()=>{

   const queryClient = useQueryClient()

    return useMutation({

        mutationFn:removeRooms,
        onSuccess:(data)=>{
            
            toast.success(data.message)

              queryClient.invalidateQueries({
                queryKey:["hostelConfig"]
            })
        }
    })
}