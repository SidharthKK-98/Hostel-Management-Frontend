import { loginAPI } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"


export const useLogin=()=>{

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn:loginAPI,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ["authUser"] })

            navigate("/admin")

        },
        
    })
}