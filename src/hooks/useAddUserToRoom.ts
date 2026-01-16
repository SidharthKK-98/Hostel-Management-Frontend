import { addUsers } from "@/apis/hostelConfigAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddUserToRoom=()=>{

    const queryClient = useQueryClient()

    return useMutation({

        mutationFn:addUsers,
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