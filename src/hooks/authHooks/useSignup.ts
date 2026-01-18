import { signupAPI } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useSignup=()=>{

    const queryClient = useQueryClient()

     return useMutation({
        mutationFn:signupAPI,
        onSuccess:(data)=>{
            queryClient.setQueryData(["authUser"],data.user)
        },
    })

}