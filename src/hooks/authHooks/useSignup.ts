import { signupAPI } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useSignup=()=>{

    const queryClient = useQueryClient()

     return useMutation({
        mutationFn:signupAPI,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ["authUser"] })
        },
    })

}