import { addUsers } from "@/apis/hostelConfigAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useAddUserToRoom=()=>{

    const queryClient = useQueryClient()

    return useMutation({

        mutationFn:addUsers,
        onSuccess:(response)=>{

            toast.success(response.message)
            
            queryClient.invalidateQueries({
                queryKey:["RoomUnassignedUsers"]
            })

            queryClient.invalidateQueries({
                queryKey:["hostelConfig"]
            })

            queryClient.invalidateQueries({
                queryKey:["user"]
            })

        }

    })
}