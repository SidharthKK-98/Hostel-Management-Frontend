import { updateUnresolvedComplaints } from "@/apis/ComplaintAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useUpdateComplaintStatus=()=>{

    const qc = useQueryClient()

    return useMutation({
        mutationFn:updateUnresolvedComplaints,
        onSuccess:(response)=>{
            toast.success(response.message)
            qc.invalidateQueries({queryKey:["User-Complaint"]})

        }
    })

}