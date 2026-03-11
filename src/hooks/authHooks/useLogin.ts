import { loginAPI } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useLogin=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:loginAPI,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ["authUser"] })


        },
        
    })
}