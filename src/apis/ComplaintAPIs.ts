import {type PostComplaintResponse, type ComplaintPayload } from "@/Types/complaintTypes";
import commonAPI from "./commonAPI";

export const postComplaint=(payload:ComplaintPayload)=>{
    return commonAPI<PostComplaintResponse>("POST","complaint/postIssue",payload)
}