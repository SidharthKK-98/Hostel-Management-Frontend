import { removeUser } from "@/apis/hostelConfigAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteUserFromRoom=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:removeUser,
        onSuccess:()=>{

              queryClient.invalidateQueries({
                queryKey:["RoomUnassignedUsers"]
            })

            queryClient.invalidateQueries({
                queryKey:["hostelConfig"]
            })

        }
    })
}