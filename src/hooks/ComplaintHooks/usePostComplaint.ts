import { postComplaint } from "@/apis/ComplaintAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const usePostComplaint=()=>{
    const qc = useQueryClient()

    return useMutation({
        mutationFn:postComplaint,
        onSuccess:(response)=>{
            toast.success(response.message)
            qc.invalidateQueries({queryKey:["User-Complaint"]})
        }
    })
}