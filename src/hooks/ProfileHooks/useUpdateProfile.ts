import { updateProfile } from "@/apis/authAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useUpdateProfile=()=>{

    const qc= useQueryClient()

    return useMutation({
        mutationFn:updateProfile,
        onSuccess:(response)=>{
            toast.success(response.message)
            qc.invalidateQueries({queryKey:["authUser"]})
        }
    })

}