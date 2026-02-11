import {type PostComplaintResponse, type ComplaintPayload,type GetComplaintsResponse } from "@/Types/complaintTypes";
import commonAPI from "./commonAPI";

export const postComplaint=(payload:ComplaintPayload)=>{
    return commonAPI<PostComplaintResponse>("POST","complaint/postIssue",payload)
}

export const getUnresolvedComplaints=()=>{
    return commonAPI<GetComplaintsResponse>("GET","complaint/getAllUnresolved")
}

export const updateUnresolvedComplaints=(complaintId:string)=>{
    return commonAPI<PostComplaintResponse>("PATCH",`complaint/updateIssue/${complaintId}`)
}

export const getComplaintHistory=()=>{
    return commonAPI<GetComplaintsResponse>("GET","complaint/getComplaintHistory")
}