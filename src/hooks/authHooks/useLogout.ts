import { logoutApI } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const useLogout = ()=>{

   const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn:logoutApI,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.clear()
            navigate("/login")

        },
        onError:()=>{
            toast.error("login failed")
        }
    })


}