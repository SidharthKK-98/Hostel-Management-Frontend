import { getUnresolvedComplaints } from "@/apis/ComplaintAPIs"
import { useQuery } from "@tanstack/react-query"

export const useGetAllUnresolvedComplaints=()=>{

    return useQuery({
        queryKey:["User-Complaint"],
        queryFn:getUnresolvedComplaints
    })

}