import { removeUser } from "@/apis/hostelConfigAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useDeleteUserFromRoom=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:removeUser,
        onSuccess:(response)=>{

            toast.error(response.message)

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