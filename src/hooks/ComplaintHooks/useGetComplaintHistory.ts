
import { getComplaintHistory } from "@/apis/ComplaintAPIs"
import { useQuery } from "@tanstack/react-query"

export const useGetComplaintHistory=()=>{

    return useQuery({
        queryKey:["User-Complaint"],
        queryFn:getComplaintHistory
    })

}